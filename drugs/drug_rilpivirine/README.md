<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;rilpivirine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rilpivirine_Aouri2017_reference&quot;,&quot;label&quot;:&quot;Aouri_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rilpivirine/Rilpivirine_Aouri2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rilpivirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rilpivirine/Rilpivirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# rilpivirine

- **generic name:** rilpivirine
- **ATC codes:** `J05AG05`, `J05AR08`, `J05AR19`, `J05AR21`
- **DrugBank:** [DB08864](https://go.drugbank.com/drugs/DB08864) · **PubChem:** [CID 6451164](https://pubchem.ncbi.nlm.nih.gov/compound/6451164)
- **molar mass:** 366.4185 g/mol (C22H18N6) — DrugBank
- **groups:** approved, investigational

## About

It is authorised in the European Union for HIV and is used both alone and in combination antiviral products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421547](https://www.wikidata.org/wiki/Q421547) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rilpivirine | parent | 366.418 | C22H18N6 | DrugBank | [6451164](https://pubchem.ncbi.nlm.nih.gov/compound/6451164) | Aouri_2017, Thoueille_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:00 | 8:05 | 0/0/2 | 1/0/0 | 0/0/0 | 468,675/28,295 | ollama / glm-5.3-flash | 10 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Aouri_2017_reference](drugs/drug_rilpivirine/Rilpivirine_Aouri2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Aouri M et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2017) | [10.1128/AAC.00899-16](https://doi.org/10.1128/AAC.00899-16) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Thoueille_2024_reference](drugs/drug_rilpivirine/Rilpivirine_Thoueille2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Thoueille P et al., Population pharmacokinetics of rilpivir…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1437400](https://doi.org/10.3389/fphar.2024.1437400) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Néant_2019_VL](drugs/drug_rilpivirine/pd_N_ant_2019_VL.md) | HIV-1 viral load ← rilpivirine · direct Emax (saturable) effect | — | Néant N et al., Concentration-response model of rilpivi…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz141](https://doi.org/10.1093/jac/dkz141) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aouri_2017.pdf` | Aouri M et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.00899-16](https://doi.org/10.1128/AAC.00899-16) | [27799217](https://pubmed.ncbi.nlm.nih.gov/27799217) | Population PK model of rilpivirine with CL 11.7 L/h, V 401 L, and MAT 4 h reported directly in the abstract. |
| `Kably_2025.pdf` | Kably B et al., Minimal impact of pregnancy on rilpivir…, International journal of in… (2025) | popPK | 8 | [10.1016/j.ijid.2025.108145](https://doi.org/10.1016/j.ijid.2025.108145) | [41110592](https://pubmed.ncbi.nlm.nih.gov/41110592) | Population PK of rilpivirine in pregnant women, but detailed parameter values (CL, V) likely in tables/supplement not provided; only C24h medians appear. |

<sub>queue written 2026-10-07T16:53:24.122445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benaboud_2023 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Di_2026 | irrelevant | 2 | 2 | This is a narrative review of BIC/FTC/TAF; rilpivirine appears only as a comparator in a summary table (Vd, half-life) without a PK model or dedicated rilpivirine disposition analysis. |
| popPK | Fernández-González_2025 | irrelevant | 3 | 2 | Observational trough-concentration study of LA cabotegravir+rilpivirine in humans; no population-PK model or disposition parameters (CL/V/ka/half-life) reported, and detailed values largely in supplementary figures/tables not provided. |
| popPK | Ford_2025 | relevant | 7 | 4 | Human population PK study of rilpivirine LA (PPK modeling and simulations), but detailed numeric RPV parameter values (Table 2, Figures 3–6, PPK model details) are in tables/figures/supplementary material not fully provided; only benchmark concentrations (17.3 ng/mL) and half-life (~200 days) appear in text. |
| popPK | Fromage_2024 | irrelevant | 4 | 2 | Simulation study using existing population PK models for rilpivirine, but no CL/V/ka or other disposition parameter values are reported in the evidence (only simulated concentrations). |
| popPK | Han_2024 | irrelevant | 2 | 2 | This is a population PK study of cabotegravir; rilpivirine is only mentioned as a co-administered comparator drug, with no rilpivirine PK parameters reported. |
| popPK | Han_2025 | irrelevant | 1 | 1 | This is a cabotegravir population PK study; rilpivirine is only mentioned as co-administered drug, with no rilpivirine PK parameters reported. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | Medicinal chemistry study of new NNRTI analogs; rilpivirine is only a comparator, no PK parameters reported. |
| popPK | Kably_2025 | relevant | 8 | 4 | Population PK of rilpivirine in pregnant women, but detailed parameter values (CL, V) likely in tables/supplement not provided; only C24h medians appear. |
| popPK | Letendre_2020 | irrelevant | 3 | 5 | Reports CSF/plasma concentration ratios for rilpivirine but no disposition parameters (CL, V, Q, ka, or population-PK model); the absorption half-life values cited are from prior studies, not modeled here. |
| popPK | Li_2022 | irrelevant | 2 | 2 | This is a narrative review of RT inhibitors; rilpivirine PK values (e.g., t1/2 34–55 h) are cited from other sources without a PK model or full disposition parameters. |
| popPK | Mehta_2023 | irrelevant | 3 | 2 | Reports only trough concentrations (C0) and exposure-response summaries; no CL/V/ka or population-PK parameter values are given, and numeric values appear only in referenced figures/tables not provided. |
| popPK | Mora-Peris_2014 | irrelevant | 3 | 5 | Reports only concentration measurements (troughs, CSF/seminal plasma levels and ratios), not disposition parameters (CL, V, half-life) or a PK model for rilpivirine. |
| popPK | Néant_2019 | irrelevant | 2 | 1 | This is a pharmacodynamic (EC50/viral dynamics) study; PK parameters were taken from a previous model and no numeric disposition values (CL, V, ka) appear in the evidence. |
| popPK | Padilla_2026 | irrelevant | 3 | 2 | Reports only plasma concentrations (troughs) compared between injection techniques, with no CL, V, ka, half-life, or PK model parameters for rilpivirine. |
| popPK | Prener_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on novel NNRTI analogues; rilpivirine is only a comparator, with no PK disposition parameters reported (only in-vitro microsomal CLint, referenced to a table). |
| popPK | Sang_2023 | irrelevant | 0 | 0 | Rilpivirine is only a comparator in a medicinal chemistry study of new DAPY derivatives; no PK parameters for rilpivirine itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:53 UTC</sub>
