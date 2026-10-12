<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;sitafloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sitafloxacin_Paiboonvong2025_reference&quot;,&quot;label&quot;:&quot;Paiboonvong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sitafloxacin/Sitafloxacin_Paiboonvong2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sitafloxacin

- **generic name:** sitafloxacin
- **ATC codes:** `J01MA21`
- **DrugBank:** [DB13261](https://go.drugbank.com/drugs/DB13261) · **PubChem:** not captured
- **molar mass:** 873.68 g/mol (C38H42Cl2F4N6O9) — DrugBank
- **groups:** investigational

## About

Sitafloxacin is a fluoroquinolone antibacterial investigated for treating bacterial infections. It is not authorised in the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3962322](https://www.wikidata.org/wiki/Q3962322) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sitafloxacin | parent | 873.68 | C38H42Cl2F4N6O9 | DrugBank | — | Paiboonvong_2025, Tanigawara_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:21 | 19:52 | 0/0/2 | 1/0/0 | 0/0/0 | 90,109/3,459 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Paiboonvong_2025_reference](drugs/drug_sitafloxacin/Sitafloxacin_Paiboonvong2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+1 cov.) | Paiboonvong T et al., Population Pharmacokinetics and Pharmac…, Pharmacology research & per… (2025) | [10.1002/prp2.70081](https://doi.org/10.1002/prp2.70081) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Tanigawara_2013_reference](drugs/drug_sitafloxacin/Sitafloxacin_Tanigawara2013_reference.md) | — | 1-compartment (no model) | 2 | Tanigawara Y et al., Population pharmacokinetics and pharmac…, Journal of infection and ch… (2013) | [10.1007/s10156-013-0580-2](https://doi.org/10.1007/s10156-013-0580-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guo_2022_killing_effect](drugs/drug_sitafloxacin/pd_Guo_2022_killing_effect.md) | killing effect ← sitafloxacin · direct sigmoid Emax (Hill) effect | — | Guo S et al., Sitafloxacin pharmacokinetics/pharmacod…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac365](https://doi.org/10.1093/jac/dkac365) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sitafloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2022 | irrelevant | 1 | 0 | The study is an in vitro PK/PD simulation model, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the drug itself. |
| popPK | Kohno_2013 | irrelevant | 1 | 0 | The study reports PK-PD indices (fAUC/MIC, fCmax/MIC) for clinical dose optimization but does not provide quantitative disposition parameters (CL, V, ka) or compartmental model parameters for sitafloxacin. |
| popPK | Rodjun_2023 | irrelevant | 4 | 2 | The study is a simulation using pre-existing PK models for sitafloxacin; while Table 2 in the text mentions parameters, the specific numeric values for the sitafloxacin model are not present in the provided evidence (only colistin parameters and dose optimization results are visible). |
| popPK | Yamagishi_2017 | irrelevant | 0 | 0 | The study calculates PK-PD breakpoints and uses Monte Carlo simulations based on PK parameters cited from other studies; it does not report original quantitative PK parameters (CL, V, ka) for sitafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:03 UTC</sub>
