<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cabotegravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cabotegravir_Renou2026_han_et_al&quot;,&quot;label&quot;:&quot;Renou_2026_han_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabotegravir/Cabotegravir_Renou2026_han_et_al.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabotegravir_Renou2026_thoueille_et_al&quot;,&quot;label&quot;:&quot;Renou_2026_thoueille_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cabotegravir

- **generic name:** cabotegravir
- **ATC codes:** `J05AJ04`
- **DrugBank:** [DB11751](https://go.drugbank.com/drugs/DB11751) · **PubChem:** [CID 54713659](https://pubchem.ncbi.nlm.nih.gov/compound/54713659)
- **molar mass:** 405.358 g/mol (C19H17F2N3O5) — DrugBank
- **groups:** approved, investigational

## About

Cabotegravir is an antiviral drug used to treat HIV infection. It is an authorised medicine in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15411012](https://www.wikidata.org/wiki/Q15411012) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cabotegravir | parent | 405.358 | C19H17F2N3O5 | DrugBank | [54713659](https://pubchem.ncbi.nlm.nih.gov/compound/54713659) | Renou_2026, Thoueille_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:04 | 8:38 | 2/1/1 | 3/0/0 | 0/0/0 | 440,408/28,768 | ollama / glm-5.3-flash | 13 | 4/9 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Renou_2026_han_et_al](drugs/drug_cabotegravir/Cabotegravir_Renou2026_han_et_al.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Renou Q et al., External Evaluation of Population Pharm…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70180](https://doi.org/10.1002/psp4.70180) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Renou_2026_thoueille_et_al](drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Renou Q et al., External Evaluation of Population Pharm…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70180](https://doi.org/10.1002/psp4.70180) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6258)</sub><br><sub>route_to: `human_review`</sub> | [Thoueille_2024_reference](drugs/drug_cabotegravir/Cabotegravir_Thoueille2024_reference.md) | — | 1-compartment (no model) | 3 | Thoueille P et al., Population Pharmacokinetics of Cabotegr…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3240](https://doi.org/10.1002/cpt.3240) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Han_2024_2_reference](drugs/drug_cabotegravir/Cabotegravir_Han2024v2_reference.md) | — | 1-compartment (no model) | 0 | Han K et al., Population pharmacokinetics of cabotegr…, Antimicrobial agents and ch… (2024) | [10.1128/aac.00880-24](https://doi.org/10.1128/aac.00880-24) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cheung_2022_HIV_infection_of_GFP_reporter_CD4_T_cells_INSTI_susceptibility](drugs/drug_cabotegravir/pd_Cheung_2022_HIV_infection_of_GFP_reporter_CD4_T_cells_INSTI_.md) | HIV infection of GFP-reporter CD4+ T-cells (INSTI susceptibility) ← cabotegravir · direct sigmoid Emax (Hill) effect | — | Cheung PK et al., Impact of combinations of clinically ob…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkab498](https://doi.org/10.1093/jac/dkab498) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schneiderman_2022_PVL](drugs/drug_cabotegravir/pd_Schneiderman_2022_PVL.md) | HTLV-1 proviral load ← cabotegravir · inhibition effect | — | Schneiderman BS et al., Cabotegravir, the Long-Acting Integrase…, Frontiers in medicine (2022) | [10.3389/fmed.2022.889621](https://doi.org/10.3389/fmed.2022.889621) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schneiderman_2022_strand_transfer](drugs/drug_cabotegravir/pd_Schneiderman_2022_strand_transfer.md) | HTLV-1 IN strand transfer activity ← cabotegravir · inhibition effect | — | Schneiderman BS et al., Cabotegravir, the Long-Acting Integrase…, Frontiers in medicine (2022) | [10.3389/fmed.2022.889621](https://doi.org/10.3389/fmed.2022.889621) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2025_Infectivity](drugs/drug_cabotegravir/pd_Smith_2025_Infectivity.md) | HIV-1 vector infectivity (luciferase activity) in single-round infection assay ← cabotegravir · direct sigmoid Emax (Hill) effect | — | Smith SJ et al., Comparative Analyses of Antiviral Poten…, Viruses (2025) | [10.3390/v17010121](https://doi.org/10.3390/v17010121) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cabotegravir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2022.pdf` | Yu Y et al., A population pharmacokinetic model base…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15477](https://doi.org/10.1111/bcp.15477) | [35949044](https://pubmed.ncbi.nlm.nih.gov/35949044) | Population PK model of cabotegravir in humans, but numeric parameter values (CL, V, ka) appear to live in tables/supplementary not included in the evidence. |

<sub>queue written 2026-10-07T15:56:59.795052+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheung_2022 | irrelevant | 0 | 0 | In-vitro phenotypic resistance study (EC50 susceptibility), no PK disposition parameters for cabotegravir. |
| popPK | Di_2026 | irrelevant | 2 | 2 | This is a review of BIC/FTC/TAF; cabotegravir appears only as a comparator in a summary table (Vd, half-life) without a PK model or dedicated cabotegravir disposition analysis. |
| popPK | Fernández-González_2025 | irrelevant | 3 | 3 | Observational cohort reporting only CAB trough concentrations and covariate associations; no CL, V, ka, half-life, or population-PK model parameters, and detailed values largely in supplementary figures/tables. |
| popPK | Fernández_2026 | irrelevant | 3 | 2 | This is a drug-distribution/concentration study in human compartments; no PK disposition parameters (CL, V, ka, half-life, model) are reported, and no numeric values appear in the evidence. |
| popPK | Ford_2025 | relevant | 8 | 4 | Population PK modeling and NCA of cabotegravir LA in humans, but the actual parameter values (GMRs, model estimates) live in Tables 2 and Figures 3–6 and supplementary material not fully provided; only scattered numbers (half-life 6.4 weeks, Cτ benchmark 0.45 µg/mL, one Cmax 60.9 µg/mL) appear in text. |
| popPK | Han_2025 | relevant | 8 | 3 | Population PK analysis of cabotegravir in humans, but numeric parameter values (KALA, CL/F, V2/F) appear only in Figure 1, not provided in the evidence. |
| popPK | Hassounah_2017 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study (EC50s), no PK disposition parameters for cabotegravir. |
| popPK | Ivashchenko_2020 | irrelevant | 2 | 1 | Cabotegravir is only a comparator; PK parameters (bioavailability, half-life) are for the novel compound 1{26} in rats, and no numeric cabotegravir PK values are given. |
| popPK | Letendre_2020 | irrelevant | 3 | 2 | CSF distribution study reporting concentrations and CSF/plasma ratios, not disposition PK parameters (CL, V, ka, model); half-life values cited only from prior literature. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors (TAF, RPV, DOR, etc.); cabotegravir is only mentioned as an abbreviation/comparator with no PK parameters for it. |
| popPK | Ndashimye_2021 | irrelevant | 0 | 0 | This is a virology susceptibility (EC50 fold-change) study, not a pharmacokinetic study; no disposition parameters are reported. |
| popPK | Padilla_2026 | irrelevant | 3 | 2 | Reports only measured plasma trough concentrations, not disposition parameters (CL, V, ka, half-life) or a PK model; no numeric PK parameter values beyond concentrations. |
| popPK | Schneiderman_2022 | irrelevant | 1 | 1 | In vitro antiviral potency study (IC50/EC50) with no PK disposition parameters for cabotegravir; only half-life mentioned in passing from literature. |
| popPK | Smith_2025 | irrelevant | 0 | 0 | This is an in-vitro antiviral potency (EC50) study against HIV integrase mutants; cabotegravir is only a comparator drug and no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Trezza_2015 | relevant | 6 | 4 | Review of cabotegravir PK with some numeric values in text (half-lives, absorption rate covariate effects), but full population-PK parameter estimates live in cited primary studies/figures not provided. |
| popPK | Yu_2022 | relevant | 10 | 4 | Population PK model of cabotegravir in humans, but numeric parameter values (CL, V, ka) appear to live in tables/supplementary not included in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:57 UTC</sub>
