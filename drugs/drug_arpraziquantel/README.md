<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;arpraziquantel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_mean&quot;,&quot;label&quot;:&quot;Bustinduy_2016_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_median&quot;,&quot;label&quot;:&quot;Bustinduy_2016_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# arpraziquantel

- **generic name:** arpraziquantel
- **ATC codes:** `P02BA03`
- **DrugBank:** [DB11749](https://go.drugbank.com/drugs/DB11749) · **PubChem:** [CID 445900](https://pubchem.ncbi.nlm.nih.gov/compound/445900)
- **molar mass:** 312.4061 g/mol (C19H24N2O2) — DrugBank
- **groups:** investigational

## About

Arpraziquantel is the (R)-enantiomer of the anthelmintic praziquantel, developed for treating schistosomiasis and other trematode worm infections. It remains investigational and is not an authorised medicine; the established praziquantel is widely used, mainly in tropical regions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27292599](https://www.wikidata.org/wiki/Q27292599) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arpraziquantel | parent | 312.406 | C19H24N2O2 | DrugBank | [445900](https://pubchem.ncbi.nlm.nih.gov/compound/445900) | Bustinduy_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 10:45 | 0/1/2 | 1/0/0 | 0/0/0 | 533,306/31,998 | ollama / glm-5.3-flash | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Bustinduy_2016_mean](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean.md) | ▶ model + simulator | 1-compartment, oral | 6 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Bustinduy_2016_median](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_median.md) | ▶ model + simulator | 1-compartment, oral | 6 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bustinduy_2016_r_pzq](drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_r_pzq.md) | — | 1-compartment (no model) | 4 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female](drugs/drug_arpraziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female.md) | Viability of ex vivo adult S. mansoni worms (female) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male](drugs/drug_arpraziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male.md) | Viability of ex vivo adult S. mansoni worms (male) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falcoz_2022.pdf` | Falcoz C et al., R-praziquantel integrated population ph…, Journal of pharmacokinetics… (2022) | popPK | 9 | [10.1007/s10928-021-09791-8](https://doi.org/10.1007/s10928-021-09791-8) | [35024995](https://pubmed.ncbi.nlm.nih.gov/35024995) | Original population PK model of R-praziquantel (arpraziquantel) in humans, but the abstract reports only covariate effect percentages (64%, 70%, 35%) — actual CL/V/ka parameter values appear to live in tables/figures not provided. |

<sub>queue written 2026-10-07T09:12:07.959200+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biendl_2022 | irrelevant | 0 | 0 | This is an antischistosomal drug-screening study; praziquantel is only mentioned as the existing treatment and no PK parameters for it are reported. |
| popPK | Biendl_2023 | irrelevant | 0 | 0 | The paper concerns ozonide antischistosomal compounds, not arpraziquantel; praziquantel is only mentioned as background and no PK parameters for it are reported. |
| popPK | Brito_2022 | irrelevant | 0 | 0 | In vitro antischistosomal drug-discovery study of neolignans; praziquantel is only a reference comparator and no PK parameters are reported. |
| popPK | Bustinduy_2020 | irrelevant | 2 | 8 | This is a population PK study of praziquantel (PZQ), the racemate, not arpraziquantel specifically; numeric parameters (Ka 2.012 h⁻¹, SCL/F 324 L/h, Vc/F 183 L) are present in the evidence but for the wrong drug. |
| popPK | Dobrachinski_2024 | irrelevant | 0 | 0 | This is a pharmacophore/virtual screening and efficacy study; praziquantel is only a template, with no PK parameters reported. |
| popPK | Falcoz_2022 | relevant | 9 | 3 | Original population PK model of R-praziquantel (arpraziquantel) in humans, but the abstract reports only covariate effect percentages (64%, 70%, 35%) — actual CL/V/ka parameter values appear to live in tables/figures not provided. |
| popPK | Giorgi_2001 | irrelevant | 0 | 0 | The study concerns praziquantel, a different drug from arpraziquantel, and no numeric PK parameter values appear in the evidence. |
| popPK | González_2024 | irrelevant | 0 | 0 | This is a physicochemical property analysis of anti-schistosomal compounds; PZQ is only discussed for cLogD/permeability, with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Hai-Feng_2017 | irrelevant | 0 | 0 | The study reports PK parameters for praziquantel, a different drug, not arpraziquantel. |
| popPK | Lombardo_2019 | irrelevant | 0 | 5 | The study reports PK parameters (AUC, Cl/F) for praziquantel, not arpraziquantel, so it concerns a different drug. |
| popPK | Meister_2019 | irrelevant | 0 | 0 | This is a population PK study of tribendimidine (metabolites dADT/adADT); praziquantel appears only as a comparator treatment, and no arpraziquantel PK parameters are reported. |
| popPK | Morais_2021 | irrelevant | 0 | 0 | This is a drug-discovery/antischistosomal screening study of pyrazoline derivatives; praziquantel is only a positive control and no PK disposition parameters for it are reported. |
| popPK | Ridtitid_2007 | irrelevant | 0 | 0 | The study concerns praziquantel, a different drug from arpraziquantel, so its PK parameters (Cl/F, AUC, Cmax) do not apply to arpraziquantel. |
| popPK | Souza_2024 | irrelevant | 0 | 0 | Praziquantel is only an in vitro efficacy comparator; no PK parameters are reported. |
| popPK | Thomas_2016 | irrelevant | 1 | 1 | This is a study of praziquantel chemical degradation in aquarium water, not a PK study reporting disposition parameters (CL, V, ka, half-life with volume) for the drug in a subject; no numeric PK parameter values are present. |
| popPK | Whiteland_2020 | irrelevant | 0 | 0 | This is an in vitro anti-schistosomal drug-discovery study of N-acyl homoserine lactones; praziquantel is only a positive control and no PK parameters for it are reported. |
| popPK | de_2020 | irrelevant | 0 | 0 | This is an efficacy study of diminazene against S. mansoni in mice; praziquantel is only mentioned as background and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:12 UTC</sub>
