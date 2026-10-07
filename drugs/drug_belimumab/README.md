<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;}]"></div>

# belimumab

- **generic name:** belimumab
- **ATC codes:** `L04AG04`
- **DrugBank:** [DB08879](https://go.drugbank.com/drugs/DB08879) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Belimumab is a monoclonal antibody immunosuppressant used to treat systemic lupus erythematosus, including lupus nephritis. It is authorised in the European Union and is an approved medicine, used mainly for lupus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1996249](https://www.wikidata.org/wiki/Q1996249) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:31 | 2:05 | 0/3/2 | 1/1/0 | 0/0/0 | 204,064/8,605 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Struemper_2013_reference](drugs/drug_belimumab/Belimumab_Struemper2013_reference.md) | — | 1-compartment (no model) | 3 | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2021_reference](drugs/drug_belimumab/Belimumab_Zhou2021_reference.md) | — | 2-compartment (no model) | 4 | Zhou X et al., Prediction of Belimumab Pharmacokinetic…, Drugs in R&D (2021) | [10.1007/s40268-021-00363-2](https://doi.org/10.1007/s40268-021-00363-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brunner_2025_reference](drugs/drug_belimumab/Belimumab_Brunner2025_reference.md) | — | 1-compartment (no model) | 0 | Brunner HI et al., Pharmacokinetics, Pharmacodynamics, and…, Arthritis care & research (2026) | [10.1002/acr.25700](https://doi.org/10.1002/acr.25700) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dimelow_2021_reference](drugs/drug_belimumab/Belimumab_Dimelow2021_reference.md) | — | 1-compartment (no model) | 0 | Dimelow R et al., Pharmacokinetics of Belimumab in Childr…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.889](https://doi.org/10.1002/cpdd.889) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Struemper_2018_reference](drugs/drug_belimumab/Belimumab_Struemper2018_reference.md) | — | 3-compartment (no model) | 5 | Struemper H et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0586-5](https://doi.org/10.1007/s40262-017-0586-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vaskeikina_2026_FVC](drugs/drug_belimumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← belimumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2025_SRI](drugs/drug_belimumab/pd_Wu_2025_SRI.md) | SLE Responder Index (SRI) response ← belimumab · direct Emax (saturable) effect | — | Wu J et al., Inter-regional pharmacokinetics and exp…, British journal of clinical… (2025) | [10.1111/bcp.16263](https://doi.org/10.1111/bcp.16263) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=belimumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNFSF13B (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2013.pdf` | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) | [23681782](https://pubmed.ncbi.nlm.nih.gov/23681782) | The evidence explicitly provides numeric values for population clearance (215 mL/day), steady-state volume of distribution (5.29 L), and terminal half-life (19.4 days) from a two-compartment model. |

<sub>queue written 2026-10-06T23:30:30.583672+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balevic_2023 | irrelevant | 1 | 0 | The study is an exposure-response and pharmacodynamic (PD) analysis for efficacy extrapolation, not a pharmacokinetic (PK) study reporting quantitative disposition parameters like clearance or volume for belimumab. |
| popPK | Dimelow_2024 | relevant | 8 | 3 | The paper describes the structure of a population PK model for belimumab and cites some exposure metrics (Cavg) from previous studies, but the specific numeric model parameters (CL, V, Q) are not listed in the provided text or tables. |
| popPK | Halpern_2006 | irrelevant | 4 | 0 | The paper describes pharmacokinetics in cynomolgus monkeys but provides no numeric quantitative PK parameter values (CL, V, t1/2) in the evidence provided. |
| popPK | Kojima_2025 | irrelevant | 0 | 0 | This is a clinical outcome study focusing on disease activity scores (SELENA-SLEDAI) and timing of initiation, containing no pharmacokinetic parameters. |
| popPK | Kowalczyk-Quintas_2018 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of belimumab's binding to membrane-bound BAFF, reporting no pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Liu_2022 | irrelevant | 1 | 0 | The paper is a regulatory review that discusses population PK concepts and qualitative associations (e.g., proteinuria affecting clearance) but does not report specific numeric parameter values for belimumab. |
| popPK | Maeda_2023 | irrelevant | 0 | 0 | The paper is an immunophenotyping study analyzing T-cell changes following belimumab treatment in SLE patients and does not report any pharmacokinetic parameters such as clearance or volume. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study, and reports no PK parameters for belimumab. |
| popPK | Wu_2025 | relevant | 10 | 2 | The paper describes a population PK model for belimumab in humans, but the specific parameter estimates (CL, Vc, etc.) are located in the Supporting Information or Figure S1, which are not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:30 UTC</sub>
