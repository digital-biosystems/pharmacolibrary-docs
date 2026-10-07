<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;secukinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Secukinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# secukinumab

- **generic name:** secukinumab
- **ATC codes:** `L04AC10`
- **DrugBank:** [DB09029](https://go.drugbank.com/drugs/DB09029) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Secukinumab is a monoclonal antibody that blocks interleukin-17 and is used to treat psoriasis, psoriatic arthritis, and ankylosing spondylitis. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7444755](https://www.wikidata.org/wiki/Q7444755) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:32 | 2:47 | 2/1/0 | 0/0/1 | 0/0/0 | 284,408/20,047 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bruin_2017_reference](drugs/drug_secukinumab/Secukinumab_Bruin2017_reference.md) | held back | 1-compartment, oral | 6 | Bruin G et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.876](https://doi.org/10.1002/jcph.876) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dumortier_2025_reference](drugs/drug_secukinumab/Secukinumab_Dumortier2025_reference.md) | — | 1-compartment (no model) | 0 | Dumortier T et al., Model-Informed Drug Development-Based B…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3716](https://doi.org/10.1002/cpt.3716) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodriguez-Fernandez_2024_PASI](drugs/drug_secukinumab/pd_Rodriguez_Fernandez_2024_PASI.md) | Psoriasis Area and Severity Index ← secukinumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Rodriguez-Fernandez K et al., Personalized Secukinumab Treatment in P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121576](https://doi.org/10.3390/pharmaceutics16121576) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=secukinumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhiwei_2025.pdf` | Zhiwei L et al., Physiologically Based Pharmacokinetic/P…, Journal of clinical pharmac… (2025) | popPK | 9 | [10.1002/jcph.70056](https://doi.org/10.1002/jcph.70056) | [40464650](https://pubmed.ncbi.nlm.nih.gov/40464650) | The study describes a PBPK model for secukinumab in humans but provides no specific numeric PK parameter values (CL, V, etc.) in the text. |
| `Liu_2026.pdf` | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | popPK | 5 | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) | [41543629](https://pubmed.ncbi.nlm.nih.gov/41543629) | The paper is a model-based meta-analysis that uses secukinumab PK parameters extracted from FDA/EMA documents to build an exposure-response model, but the specific numeric PK values are not presented in the provided evidence. |

<sub>queue written 2026-10-07T00:30:02.437212+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alavi_2026 | relevant | 8 | 2 | The study describes a population PK model for secukinumab and reports qualitative covariate effects (e.g., % change in concentration), but the specific quantitative parameter values (CL, V, ka, half-life) are not explicitly stated in the text. |
| popPK | Fromage_2024 | irrelevant | 4 | 0 | The paper describes a case report using a population PK model for secukinumab but provides no quantitative disposition parameter values (CL, V, etc.) in the evidence. |
| popPK | Liu_2023 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling for efficacy outcomes (PASI scores) to optimize dose regimens, not on characterizing the population pharmacokinetic parameters (CL, V, ka, half-life) of secukinumab itself. |
| popPK | Liu_2026 | relevant | 5 | 0 | The paper is a model-based meta-analysis that uses secukinumab PK parameters extracted from FDA/EMA documents to build an exposure-response model, but the specific numeric PK values are not presented in the provided evidence. |
| popPK | Marzo-Ortega_2017 | irrelevant | 0 | 0 | The paper reports long-term efficacy and safety outcomes for secukinumab in ankylosing spondylitis but does not contain pharmacokinetic disposition parameters. |
| popPK | McInnes_2017 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study (FUTURE 2) reporting ACR/PASI outcomes and adverse events, with no population pharmacokinetic parameter estimation or quantitative disposition data for secukinumab. |
| popPK | Ramanathan_2025 | relevant | 4 | 0 | Secukinumab is one of 13 antibodies used to validate a diffusion dimensionality absorption model, but no specific quantitative PK parameters (e.g., CL, V, ka) are reported in the provided evidence. |
| popPK | Zhiwei_2025 | relevant | 9 | 0 | The study describes a PBPK model for secukinumab in humans but provides no specific numeric PK parameter values (CL, V, etc.) in the text. |
| popPK | van_2020 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy study reporting radiographic progression and clinical responses, containing no pharmacokinetic parameters (CL, V, t1/2) for secukinumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:30 UTC</sub>
