<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;enzalutamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enzalutamide_Hadigol2026_reference&quot;,&quot;label&quot;:&quot;Hadigol_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# enzalutamide

- **generic name:** enzalutamide
- **ATC codes:** `L02BB04`
- **DrugBank:** [DB08899](https://go.drugbank.com/drugs/DB08899) · **PubChem:** [CID 15951529](https://pubchem.ncbi.nlm.nih.gov/compound/15951529)
- **molar mass:** 464.436 g/mol (C21H16F4N4O2S) — DrugBank
- **groups:** approved, investigational

## About

Enzalutamide is an anti-androgen medicine used to treat prostate cancer. It is an approved drug and is authorised in the European Union for prostate tumours.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1996756](https://www.wikidata.org/wiki/Q1996756) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enzalutamide | parent | 464.436 | C21H16F4N4O2S | DrugBank | [15951529](https://pubchem.ncbi.nlm.nih.gov/compound/15951529) | Hadigol_2026 |
| N-desmethyl enzalutamide | metabolite | 450.41 | C20H14F4N4O2S | PubChem | [70678916](https://pubchem.ncbi.nlm.nih.gov/compound/70678916) | Hadigol_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:21 | 1:42 | 1/0/0 | 0/0/0 | 0/0/0 | 117,757/5,529 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.408). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Hadigol_2026_reference](drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference.md) | ▶ model + simulator | parent 1-cmt + 1 metabolite (2-cmt) | 14 (+6 cov.) | Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enzalutamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inducer, `CYP2C8` inhibitor/substrate, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | prostate gland | `AR` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2026.pdf` | Kim SJ et al., PK-PD Modeling Suggests Tumor Heterogen…, Pharmaceutical research (2026) | popPK | 8 | [10.1007/s11095-026-04091-7](https://doi.org/10.1007/s11095-026-04091-7) | [42086870](https://pubmed.ncbi.nlm.nih.gov/42086870) | The study develops a PK-PD model for enzalutamide in mice and humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the evidence, only concentration ranges and relative metrics. |

<sub>queue written 2026-10-06T22:20:53.132072+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cella_2015 | irrelevant | 0 | 0 | The paper reports health-related quality of life (HRQoL) outcomes (FACT-P scores) and does not contain any pharmacokinetic parameters (e.g., clearance, volume of distribution) for enzalutamide. |
| popPK | Handa_2025 | irrelevant | 0 | 0 | The paper is a transcriptomic/biomarker analysis of prostate cancer tumors and does not report any pharmacokinetic parameters (CL, V, t1/2) for enzalutamide. |
| popPK | Hong_2018 | irrelevant | 0 | 0 | This is a narrative review of pharmacology and efficacy without specific quantitative PK parameter values for enzalutamide. |
| popPK | Joulia_2020 | irrelevant | 2 | 1 | The study reports trough plasma concentrations (Ctrough) rather than quantitative disposition parameters like clearance, volume, or a population-PK model. |
| popPK | Kim_2026 | relevant | 8 | 2 | The study develops a PK-PD model for enzalutamide in mice and humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the evidence, only concentration ranges and relative metrics. |
| popPK | Kuzma_2024 | irrelevant | 0 | 0 | The study evaluates health-related quality of life (HRQoL) outcomes using patient-reported questionnaires (FACT-P, EQ-5D) and contains no pharmacokinetic data or parameters for enzalutamide. |
| popPK | Loriot_2015 | irrelevant | 0 | 0 | The paper reports on health-related quality of life, pain, and skeletal-related events in a phase 3 clinical trial, containing no pharmacokinetic parameters. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | The study is a systematic review and meta-analysis focusing on the safety outcomes (fall and fracture risk) of androgen receptor inhibitors, not on pharmacokinetic parameters. |
| popPK | Op_2026 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for edoxaban (the subject drug) in the presence of enzalutamide (the perpetrator/comparator), not for enzalutamide itself. |
| popPK | Op_2026_2 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of morphine (and its metabolite M6G) in the presence of enzalutamide, not the quantitative disposition parameters of enzalutamide itself. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The paper investigates CD46 antibody-drug conjugates in cancer cell lines and animals, using enzalutamide only as a context for resistance mechanisms rather than as a subject for PK modeling. |
| popPK | van_2019 | irrelevant | 2 | 2 | The study reports steady-state plasma concentrations for exposure-response analysis but does not provide quantitative compartmental pharmacokinetic parameters such as clearance (CL), volume of distribution (V), or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:20 UTC</sub>
