<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;praziquantel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Praziquantel_Bustinduy2016_mean&quot;,&quot;label&quot;:&quot;Bustinduy_2016_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_praziquantel/Praziquantel_Bustinduy2016_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Praziquantel_Bustinduy2016_median&quot;,&quot;label&quot;:&quot;Bustinduy_2016_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_praziquantel/Praziquantel_Bustinduy2016_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# praziquantel

- **generic name:** praziquantel
- **ATC codes:** `P02BA01`
- **DrugBank:** [DB01058](https://go.drugbank.com/drugs/DB01058) · **PubChem:** [CID 4891](https://pubchem.ncbi.nlm.nih.gov/compound/4891)
- **molar mass:** 312.4061 g/mol (C19H24N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Praziquantel is an anthelmintic used to treat parasitic worm infections such as schistosomiasis, cysticercosis, opisthorchiasis, and clonorchiasis. It is widely used in human medicine and is included on the WHO essential medicines list; it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424145](https://www.wikidata.org/wiki/Q424145) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| praziquantel | parent | 312.406 | C19H24N2O2 | DrugBank | [4891](https://pubchem.ncbi.nlm.nih.gov/compound/4891) | Bonate_2018, Bustinduy_2016, Bustinduy_2020, Falcoz_2022 |
| R-praziquantel | metabolite | 312.413 | C19H24N2O2 | PubChem | [445900](https://pubchem.ncbi.nlm.nih.gov/compound/445900) | Falcoz_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:34 | 11:01 | 0/6/2 | 1/0/0 | 0/0/0 | 558,868/32,137 | ollama / glm-5.3-flash | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Bustinduy_2016_mean](drugs/drug_praziquantel/Praziquantel_Bustinduy2016_mean.md) | ▶ model + simulator | 1-compartment, oral | 6 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Bustinduy_2016_median](drugs/drug_praziquantel/Praziquantel_Bustinduy2016_median.md) | ▶ model + simulator | 1-compartment, oral | 6 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bonate_2018_reference](drugs/drug_praziquantel/Praziquantel_Bonate2018_reference.md) | — | 1-compartment (no model) | 0 | Bonate PL et al., Extrapolation of praziquantel pharmacok…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9601-1](https://doi.org/10.1007/s10928-018-9601-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bustinduy_2016_r_pzq](drugs/drug_praziquantel/Praziquantel_Bustinduy2016_r_pzq.md) | — | 1-compartment (no model) | 4 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bustinduy_2016_s_pzq](drugs/drug_praziquantel/Praziquantel_Bustinduy2016_s_pzq.md) | — | 1-compartment (no model) | 4 | Bustinduy AL et al., Population Pharmacokinetics and Pharmac…, mBio (2016) | [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Bustinduy_2020_mean](drugs/drug_praziquantel/Praziquantel_Bustinduy2020_mean.md) | — | 2-compartment (no model) | 7 | Bustinduy AL et al., Population Pharmacokinetics of Praziqua…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00566-20](https://doi.org/10.1128/AAC.00566-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.083). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bustinduy_2020_median](drugs/drug_praziquantel/Praziquantel_Bustinduy2020_median.md) | — | 1-compartment (no model) | 0 | Bustinduy AL et al., Population Pharmacokinetics of Praziqua…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00566-20](https://doi.org/10.1128/AAC.00566-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Falcoz_2022_reference](drugs/drug_praziquantel/Praziquantel_Falcoz2022_reference.md) | — | 1-compartment (no model) | 1 | Falcoz C et al., R-praziquantel integrated population ph…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-021-09791-8](https://doi.org/10.1007/s10928-021-09791-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female](drugs/drug_praziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_female.md) | Viability of ex vivo adult S. mansoni worms (female) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male](drugs/drug_praziquantel/pd_Brito_2022_Viability_of_ex_vivo_adult_S_mansoni_worms_male.md) | Viability of ex vivo adult S. mansoni worms (male) ← praziquantel · direct sigmoid Emax (Hill) effect | — | Brito JR et al., Neolignans isolated from Saururus cernu…, Scientific reports (2022) | [10.1038/s41598-022-23110-2](https://doi.org/10.1038/s41598-022-23110-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=praziquantel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HPGDS (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 8  ·  extracted 0  ·  needs_review 2  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falcoz_2022.pdf` | Falcoz C et al., R-praziquantel integrated population ph…, Journal of pharmacokinetics… (2022) | popPK | 10 | [10.1007/s10928-021-09791-8](https://doi.org/10.1007/s10928-021-09791-8) | [35024995](https://pubmed.ncbi.nlm.nih.gov/35024995) | Population PK model of R-praziquantel in humans with structural model described, but specific numeric parameter values (CL, V, ka) are not shown in the abstract evidence provided. |
| `Hai-Feng_2017.pdf` | Hai-Feng Y et al., [Pharmacokinetics of praziquantel injec…, Zhongguo xue xi chong bing… (2017) | popPK | 8 | [10.16250/j.32.1374.2017032](https://doi.org/10.16250/j.32.1374.2017032) | [29508574](https://pubmed.ncbi.nlm.nih.gov/29508574) | Non-compartmental PK parameters (Tmax, Cmax, T1/2β, AUC, relative bioavailability) for praziquantel are reported directly in the abstract. |
| `Lombardo_2019.pdf` | Lombardo FC et al., Activity and pharmacokinetics of a praz…, European journal of pharmac… (2019) | popPK | 8 | [10.1016/j.ejpb.2019.06.029](https://doi.org/10.1016/j.ejpb.2019.06.029) | [31265895](https://pubmed.ncbi.nlm.nih.gov/31265895) | Mouse PK study of praziquantel with NCA parameters (AUC, Cl/F) reported numerically in the abstract, though full parameter sets may be in figures/tables not shown. |
| `Ridtitid_2007.pdf` | Ridtitid W et al., Pharmacokinetic interaction between ket…, Journal of clinical pharmac… (2007) | popPK | 8 | [10.1111/j.1365-2710.2007.00862.x](https://doi.org/10.1111/j.1365-2710.2007.00862.x) | [18021336](https://pubmed.ncbi.nlm.nih.gov/18021336) | Human crossover study reporting numeric praziquantel clearance (Cl/F) values directly in the abstract; non-compartmental, so no compartmental model parameters. |
| `Giorgi_2001.pdf` | Giorgi M et al., Pharmacokinetics and microsomal oxidati…, Journal of veterinary pharm… (2001) | popPK | 7 | [10.1046/j.1365-2885.2001.00341.x](https://doi.org/10.1046/j.1365-2885.2001.00341.x) | [11555180](https://pubmed.ncbi.nlm.nih.gov/11555180) | PK study of praziquantel in lambs with compartmental model, but numeric parameter values (CL, V, ka, t½) are not present in the provided evidence. |

<sub>queue written 2026-10-07T09:24:17.179929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biendl_2022 | irrelevant | 0 | 0 | This is an antischistosomal drug-screening study; praziquantel is only mentioned as the existing treatment, with no PK parameters reported. |
| popPK | Biendl_2023 | irrelevant | 0 | 0 | The paper studies ozonide antischistosomal compounds; praziquantel is only mentioned as the standard drug, with no PK parameters for it. |
| popPK | Brito_2022 | irrelevant | 0 | 0 | In vitro antischistosomal drug-discovery study of neolignans; praziquantel is only a reference comparator with EC50 values, no PK parameters. |
| popPK | Dobrachinski_2024 | irrelevant | 0 | 0 | This is a pharmacophore/virtual-screening and efficacy study; praziquantel is only a template, with no PK parameters reported. |
| popPK | Giorgi_2001 | relevant | 7 | 3 | PK study of praziquantel in lambs with compartmental model, but numeric parameter values (CL, V, ka, t½) are not present in the provided evidence. |
| popPK | González_2024 | irrelevant | 0 | 0 | Physicochemical property analysis of anti-schistosomal compounds; no PK disposition parameters (CL, V, ka, half-life, PK model) for praziquantel are reported. |
| popPK | Meister_2019 | irrelevant | 0 | 0 | This is a population PK study of tribendimidine (metabolites dADT/adADT); praziquantel appears only as a comparator treatment, with no praziquantel PK parameters reported. |
| popPK | Morais_2021 | irrelevant | 0 | 0 | This is a drug-discovery/antischistosomal activity study of pyrazoline derivatives; praziquantel is only a positive control (EC50 0.93 µM) and no PK disposition parameters for praziquantel are reported. |
| popPK | Souza_2024 | irrelevant | 0 | 0 | Praziquantel is only a positive-control comparator; no PK parameters for it are reported. |
| popPK | Thomas_2016 | irrelevant | 1 | 0 | This is a study of PZQ chemical degradation in aquarium water, not a pharmacokinetic study; no disposition parameters (CL, V, ka, half-life with volume) for praziquantel in a subject are reported, and the only PK reference (Tubbs & Tingle 2006) is cited without values. |
| popPK | Whiteland_2020 | irrelevant | 0 | 0 | This is an in vitro anti-schistosomal drug discovery study; PZQ is only a positive control and no PK parameters are reported. |
| popPK | de_2020 | irrelevant | 0 | 0 | This is an efficacy study of diminazene against schistosomiasis in mice; praziquantel is only mentioned as background and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:24 UTC</sub>
