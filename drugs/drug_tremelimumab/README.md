<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tremelimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tremelimumab_Baverel2019_reference&quot;,&quot;label&quot;:&quot;Baverel_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tremelimumab/Tremelimumab_Baverel2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tremelimumab_Wang2014_reference&quot;,&quot;label&quot;:&quot;Wang_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tremelimumab/Tremelimumab_Wang2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tremelimumab

- **generic name:** tremelimumab
- **ATC codes:** `L01FX20`
- **DrugBank:** [DB11771](https://go.drugbank.com/drugs/DB11771) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tremelimumab is a monoclonal antibody used as an anticancer medicine, notably for liver cancer and non-small-cell lung cancer. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7838098](https://www.wikidata.org/wiki/Q7838098) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:18 | 2:45 | 2/0/1 | 1/0/2 | 0/0/0 | 76,885/4,717 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baverel_2019_reference](drugs/drug_tremelimumab/Tremelimumab_Baverel2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Baverel P et al., Exposure-Response Analysis of Overall S…, Clinical and translational… (2019) | [10.1111/cts.12633](https://doi.org/10.1111/cts.12633) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2014_reference](drugs/drug_tremelimumab/Tremelimumab_Wang2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wang E et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2014) | [10.1002/jcph.309](https://doi.org/10.1002/jcph.309) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hwang_2023_reference](drugs/drug_tremelimumab/Tremelimumab_Hwang2023_reference.md) | — | 1-compartment (no model) | 1 | Hwang M et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | [10.1111/bcp.15622](https://doi.org/10.1111/bcp.15622) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2023_2_CD4_Ki67](drugs/drug_tremelimumab/pd_Song_2023_2_CD4_Ki67.md) | Proliferating CD4+ Ki67+ T cells ← tremelimumab · direct Emax (saturable) effect | — | Song X et al., Modeling of Proliferating CD4 and CD8 T…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2992](https://doi.org/10.1002/cpt.2992) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2023_2_CD8_Ki67](drugs/drug_tremelimumab/pd_Song_2023_2_CD8_Ki67.md) | Proliferating CD8+ Ki67+ T cells ← tremelimumab · direct Emax (saturable) effect | — | Song X et al., Modeling of Proliferating CD4 and CD8 T…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2992](https://doi.org/10.1002/cpt.2992) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [He_2023_OS](drugs/drug_tremelimumab/pd_He_2023_OS.md) | overall survival ← tremelimumab · time-to-event model | — | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [He_2023_PFS](drugs/drug_tremelimumab/pd_He_2023_PFS.md) | progression-free survival ← tremelimumab · time-to-event model | — | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Song_2023_CD8_Ki67_T_cells](drugs/drug_tremelimumab/pd_Song_2023_CD8_Ki67_T_cells.md) | CD8+Ki67+ T-cell count ← tremelimumab · direct Emax (saturable) effect | model (no simulator) | Song X et al., Exposure-Response Analyses of Tremelimu…, Clinical cancer research :… (2023) | [10.1158/1078-0432.CCR-22-1983](https://doi.org/10.1158/1078-0432.CCR-22-1983) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tremelimumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CTLA4 (antibody), CTLA4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2023.pdf` | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) | [37777827](https://pubmed.ncbi.nlm.nih.gov/37777827) | The paper describes a population PK model for tremelimumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hwang_2023.pdf` | Hwang M et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15622](https://doi.org/10.1111/bcp.15622) | [36454221](https://pubmed.ncbi.nlm.nih.gov/36454221) | The paper is a population PK study of tremelimumab in humans, but the evidence only provides the baseline clearance value (0.276 L/day) and lacks other key parameters like volume of distribution or half-life. |
| `Lim_2023.pdf` | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) | [37300457](https://pubmed.ncbi.nlm.nih.gov/37300457) | The paper describes a population pharmacokinetic model for tremelimumab, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Wang_2014.pdf` | Wang E et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.309](https://doi.org/10.1002/jcph.309) | [24737343](https://pubmed.ncbi.nlm.nih.gov/24737343) | The paper reports specific population pharmacokinetic parameter estimates (CL and Vc) for tremelimumab in humans directly in the text. |

<sub>queue written 2026-10-07T22:16:28.678432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | He_2023 | relevant | 10 | 0 | The paper describes a population PK model for tremelimumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Lim_2023 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for tremelimumab, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Song_2023 | relevant | 8 | 2 | The paper validates a population PK model for tremelimumab and reports exposure metrics (Cmin1, AUC), but specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text, likely residing in the referenced historical model or supplementary figures. |
| popPK | Song_2023_2 | irrelevant | 2 | 0 | The study models pharmacodynamic T-cell responses to tremelimumab exposure rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:16 UTC</sub>
