<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Talazoparib_Hadigol2026_reference&quot;,&quot;label&quot;:&quot;Hadigol_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# talazoparib

- **generic name:** talazoparib
- **ATC codes:** `L01XK04`
- **DrugBank:** [DB11760](https://go.drugbank.com/drugs/DB11760) · **PubChem:** [CID 44819241](https://pubchem.ncbi.nlm.nih.gov/compound/44819241)
- **molar mass:** 380.359 g/mol (C19H14F2N6O) — DrugBank
- **groups:** approved, investigational

## About

Talazoparib is a PARP inhibitor anticancer drug used to treat breast cancer. It is approved and authorised in the European Union for breast cancer, though it remains a specialised oncology medicine rather than a widely used drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100990](https://www.wikidata.org/wiki/Q25100990) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| talazoparib | parent | 380.359 | C19H14F2N6O | DrugBank | [44819241](https://pubchem.ncbi.nlm.nih.gov/compound/44819241) | Guo_2022, Hadigol_2026 |
| enzalutamide | metabolite | 464.437 | C21H16F4N4O2S | PubChem | [15951529](https://pubchem.ncbi.nlm.nih.gov/compound/15951529) | Hadigol_2026 |
| N-desmethyl enzalutamide | metabolite | 450.41 | C20H14F4N4O2S | PubChem | [70678916](https://pubchem.ncbi.nlm.nih.gov/compound/70678916) | Hadigol_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:06 | 6:39 | 1/0/5 | 1/0/0 | 0/0/0 | 292,558/31,148 | einfracz / qwen3.8-27b | 5 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Hadigol_2026_reference](drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference.md) | ▶ model + simulator | parent 1-cmt + 1 metabolite (2-cmt) | 15 (+4 cov.) | Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_all_patients](drugs/drug_talazoparib/Talazoparib_Guo2022_all_patients.md) | — | 1-compartment (no model) | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_mild_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_mild_hepatic.md) | — | 1-compartment (no model) | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_moderate_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_moderate_hepatic.md) | — | 1-compartment (no model) | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_normal_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_normal_hepatic.md) | — | 1-compartment (no model) | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.25). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_severe_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_severe_hepatic.md) | — | 1-compartment (no model) | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jackson_2024_SAA](drugs/drug_talazoparib/pd_Jackson_2024_SAA.md) | Single agent activity ← talazoparib · direct sigmoid Emax (Hill) effect | — | Jackson MR et al., ClonoScreen3D - A Novel 3-Dimensional C…, International journal of ra… (2024) | [10.1016/j.ijrobp.2024.02.046](https://doi.org/10.1016/j.ijrobp.2024.02.046) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jackson_2024_SAA_2](drugs/drug_talazoparib/pd_Jackson_2024_SAA_2.md) | Single agent activity ← talazoparib · direct sigmoid Emax (Hill) effect | — | Jackson MR et al., ClonoScreen3D - A Novel 3-Dimensional C…, International journal of ra… (2024) | [10.1016/j.ijrobp.2024.02.046](https://doi.org/10.1016/j.ijrobp.2024.02.046) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=talazoparib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PARP1 (inhibitor), PARP2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 1  ·  needs_review 5  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2020.pdf` | Yu Y et al., Population Pharmacokinetics of Talazopa…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1520](https://doi.org/10.1002/jcph.1520) | [31489639](https://pubmed.ncbi.nlm.nih.gov/31489639) | The paper describes a population PK model for talazoparib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

<sub>queue written 2026-10-14T21:00:06.319993+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hassan_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic and biomarker investigation using EC50/IC50 values for cellular phenotypes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for talazoparib. |
| popPK | Hoffman_2019 | relevant | 4 | 3 | The study is a QTc safety trial that reports non-compartmental PK parameters (CL/F, AUC) for talazoparib, but lacks a compartmental model, volume of distribution, or half-life. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring radiation interaction and cell survival (EC50, RIR), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wang_2016 | irrelevant | 1 | 0 | The paper is a drug discovery report focusing on pharmacodynamic potency and general PK properties without reporting specific quantitative population PK parameters. |
| popPK | Wang_2026 | relevant | 5 | 3 | The study reports AUC and Cmax values for talazoparib and utilizes a population PK model, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided evidence text. |
| popPK | Yu_2020 | relevant | 10 | 0 | The paper describes a population PK model for talazoparib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:00 UTC</sub>
