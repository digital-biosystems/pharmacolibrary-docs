<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;oprelvekin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_1_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_1_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_2_comp_ce_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_2_comp_ce_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_ce_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_3_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_3_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oprelvekin

- **generic name:** oprelvekin
- **ATC codes:** `L03AC02`
- **DrugBank:** [DB00038](https://go.drugbank.com/drugs/DB00038) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Oprelvekin is a recombinant interleukin that acts as an immunostimulant in the treatment of cancer-related conditions. It was approved at one point but has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7098691](https://www.wikidata.org/wiki/Q7098691) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 0:59 | 3/1/0 | 1/0/0 | 0/0/0 | 79,279/7,315 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kheifetz_2014_1_comp_pe_model](drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model.md) | ▶ model + simulator | 1-compartment, oral | 3 | Kheifetz Y et al., Complex pattern of interleukin-11-induc…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kheifetz_2014_2_comp_ce_model](drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_ce_model.md) | ▶ model + simulator | 2-compartment, oral | 5 | Kheifetz Y et al., Complex pattern of interleukin-11-induc…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kheifetz_2014_3_comp_pe_model](drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kheifetz Y et al., Complex pattern of interleukin-11-induc…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kheifetz_2014_2_comp_pe_model](drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_pe_model.md) | — | 2-compartment (no model) | 5 | Kheifetz Y et al., Complex pattern of interleukin-11-induc…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hill_1998_45Ca_release](drugs/drug_oprelvekin/pd_Hill_1998_45Ca_release.md) | 45Ca release from neonatal mouse calvarial bones ← oprelvekin · direct Emax (saturable) effect | — | Hill PA et al., The cellular actions of interleukin-11…, Endocrinology (1998) | [10.1210/endo.139.4.5946](https://doi.org/10.1210/endo.139.4.5946) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hill_1998_TRAP_positive_MNCs](drugs/drug_oprelvekin/pd_Hill_1998_TRAP_positive_MNCs.md) | number of tartrate-resistant acid phosphatase-positive osteoclast-like multinucleate cells ← oprelvekin · direct Emax (saturable) effect | — | Hill PA et al., The cellular actions of interleukin-11…, Endocrinology (1998) | [10.1210/endo.139.4.5946](https://doi.org/10.1210/endo.139.4.5946) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hill_1998_collagen_degradation](drugs/drug_oprelvekin/pd_Hill_1998_collagen_degradation.md) | osteoblast-mediated type I collagen degradation ← oprelvekin · direct Emax (saturable) effect | — | Hill PA et al., The cellular actions of interleukin-11…, Endocrinology (1998) | [10.1210/endo.139.4.5946](https://doi.org/10.1210/endo.139.4.5946) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hill_1998_lacunar_resorption_area](drugs/drug_oprelvekin/pd_Hill_1998_lacunar_resorption_area.md) | surface area of lacunar resorption ← oprelvekin · direct Emax (saturable) effect | — | Hill PA et al., The cellular actions of interleukin-11…, Endocrinology (1998) | [10.1210/endo.139.4.5946](https://doi.org/10.1210/endo.139.4.5946) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oprelvekin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL11RA (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boutin_2016 | irrelevant | 0 | 0 | The paper investigates TSH receptor signaling in bone cells and does not mention oprelvekin or pharmacokinetics. |
| popPK | Greenwood-Van_2001 | irrelevant | 0 | 0 | The paper studies the physiological effect of recombinant human interleukin-11 (oprelvekin) on intestinal smooth muscle function in rats and does not report any pharmacokinetic parameters. |
| popPK | Hill_1998 | irrelevant | 0 | 0 | The paper describes in vitro cellular effects of IL-11 (oprelvekin) on bone resorption and does not report any pharmacokinetic disposition parameters. |
| popPK | Myzithras_2022 | irrelevant | 0 | 0 | The study focuses on an anti-IL-11 antibody and IL-11 PK/PD, using oprelvekin (IL-11) only as a reference for target degradation parameters, rather than reporting PK parameters for oprelvekin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:05 UTC</sub>
