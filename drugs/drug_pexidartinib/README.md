<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;}]"></div>

# pexidartinib

- **generic name:** pexidartinib
- **ATC codes:** `L01EX15`, `L01XE`
- **DrugBank:** [DB12978](https://go.drugbank.com/drugs/DB12978) · **PubChem:** [CID 25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352)
- **molar mass:** 417.82 g/mol (C20H15ClF3N5) — DrugBank
- **groups:** approved, investigational

## About

Pexidartinib is a protein kinase inhibitor used to treat tenosynovial giant cell tumour of the tendon sheath (pigmented villonodular synovitis). It is approved in the United States but its use is restricted, carrying a boxed warning for liver injury; a marketing application in the European Union was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100640](https://www.wikidata.org/wiki/Q25100640) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pexidartinib | parent | 417.82 | C20H15ClF3N5 | DrugBank | [25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352) | Yin_2021 |
| ZAAD | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:23 | 4:39 | 0/1/2 | 1/0/0 | 0/0/0 | 83,429/23,850 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_pexidartinib](drugs/drug_pexidartinib/Pexidartinib_Yin2021_pexidartinib.md) | — | parent + metabolite (no model) | 3 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C2_base_Q27 failed (ratio 3.2389)</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_zaad](drugs/drug_pexidartinib/Pexidartinib_Yin2021_zaad.md) | — | parent + metabolite (no model) | 3 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_estimate_a](drugs/drug_pexidartinib/Pexidartinib_Yin2021_estimate_a.md) | — | parent + metabolite (no model) | 3 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yin_2021_2_TVS](drugs/drug_pexidartinib/pd_Yin_2021_2_TVS.md) | Longitudinal tumor volume score ← pexidartinib · direct Emax (saturable) effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_ALT_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_ALT_3_ULN.md) | Time to first ALT &gt;3× ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_AST_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_AST_3_ULN.md) | Time to first AST &gt;3× ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_ORR](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR.md) | Overall response rate by RECIST ← pexidartinib · categorical (graded) response model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_ORR_TVS](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR_TVS.md) | Overall response rate by TVS ← pexidartinib · categorical (graded) response model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_RECIST](drugs/drug_pexidartinib/pd_Yin_2021_2_RECIST.md) | Longitudinal tumor size by RECIST ← pexidartinib · direct Emax (saturable) effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_TBIL_2_baseline](drugs/drug_pexidartinib/pd_Yin_2021_2_TBIL_2_baseline.md) | Time to first TBIL &gt;2× baseline ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_TBIL_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_TBIL_ULN.md) | Time to first TBIL &gt;ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pexidartinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CSF1R (inhibitor), FLT3 (inhibitor), KIT (inhibitor), PDGFRB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boal_2020.pdf` | Boal LH et al., Pediatric PK/PD Phase I Trial of Pexida…, Clinical cancer research :… (2020) | popPK | 9 | [10.1158/1078-0432.CCR-20-1696](https://doi.org/10.1158/1078-0432.CCR-20-1696) | [32943455](https://pubmed.ncbi.nlm.nih.gov/32943455) | Pediatric human PK and population-PK modeling are reported, but no numeric disposition parameter values appear in the provided evidence. |

<sub>queue written 2026-10-07T05:19:00.295581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boal_2020 | relevant | 9 | 0 | Pediatric human PK and population-PK modeling are reported, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Yin_2021_2 | irrelevant | 1 | 0 | The analysis uses a previously described population-PK model but reports no pexidartinib disposition parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:19 UTC</sub>
