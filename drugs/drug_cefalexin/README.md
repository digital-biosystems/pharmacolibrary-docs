<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefalexin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefalexin_Prados2014_base&quot;,&quot;label&quot;:&quot;Prados_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefalexin/Cefalexin_Prados2014_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefalexin_Prados2014_final&quot;,&quot;label&quot;:&quot;Prados_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefalexin/Cefalexin_Prados2014_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefalexin

- **generic name:** cefalexin
- **ATC codes:** `J01DB01`
- **DrugBank:** [DB00567](https://go.drugbank.com/drugs/DB00567) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Cefalexin is a first-generation cephalosporin antibiotic used to treat bacterial infections such as urinary tract infections, skin infections like cellulitis, pharyngitis, respiratory infections, and pneumonia. It is widely used in human medicine and is also approved for veterinary use, and it appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411417](https://www.wikidata.org/wiki/Q411417) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefalexin (cephalexin) | parent | 347.389 | C16H17N3O4S | PubChem | [27447](https://pubchem.ncbi.nlm.nih.gov/compound/27447) | Koroleva_1981, Prados_2014 |

## Start here

> **Prados_2014_base** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adult and aged dogs. [Run it in the simulator](drugs/drug_cefalexin/Cefalexin_Prados2014_base.md?tab=Simulation) · [record](drugs/drug_cefalexin/Cefalexin_Prados2014_base.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| V | V/F | 39.55 ‡ | L | 565 mL/kg | adult and aged dogs | dog | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Prados_2014_final](drugs/drug_cefalexin/Cefalexin_Prados2014_final.md) |
| V | V/F | 44.94 ‡ | L | 642 mL/kg | adult and aged dogs | dog | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Prados_2014_base](drugs/drug_cefalexin/Cefalexin_Prados2014_base.md) |
| ka | kabs | 1.39 | 1/h | 1.39 h−1 | adult and aged dogs | dog | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Prados_2014_final](drugs/drug_cefalexin/Cefalexin_Prados2014_final.md) |
| ka | kabs | 1.4 | 1/h | 1.40 h−1 | adult and aged dogs | dog | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Prados_2014_base](drugs/drug_cefalexin/Cefalexin_Prados2014_base.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Prados_2014 · V/F ·/kg</text><circle cx="399.0" cy="30.0" r="4" fill="#2e7d32"><title>Prados_2014 · V/F ·/kg: 39.55 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Prados_2014 · V/F ·/kg</text><circle cx="418.4" cy="46.0" r="4" fill="#2e7d32"><title>Prados_2014 · V/F ·/kg: 44.94 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="mixed" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Prados_2014_base](drugs/drug_cefalexin/Cefalexin_Prados2014_base.md) | ▶ model + simulator | 1-compartment, oral | 4 | Prados AP et al., A population pharmacokinetic approach t…, Veterinary medicine interna… (2014) | [10.1155/2014/789353](https://doi.org/10.1155/2014/789353) |
| <span class="pk-rf" hidden data-species="dog" data-age="mixed" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [↳ final](drugs/drug_cefalexin/Cefalexin_Prados2014_final.md) | ▶ model + simulator | 1-compartment, oral | 4 |  |  |
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Koroleva_1981_reference](drugs/drug_cefalexin/Cefalexin_Koroleva1981_reference.md) | — | 1-compartment (no model) | 2 | Koroleva VG et al., [Cephalexin pharmacokinetics], Antibiotiki (1981) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lemaire_2009_CFU](drugs/drug_cefalexin/pd_Lemaire_2009_CFU.md) | reduction of the inoculum ← cephalexin · direct sigmoid Emax (Hill) effect | — | Lemaire S et al., Activities of ceftobiprole and other ce…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.01135-08](https://doi.org/10.1128/AAC.01135-08) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mitsuoka_2009_membrane_potential](drugs/drug_cefalexin/pd_Mitsuoka_2009_membrane_potential.md) | membrane potential ← L-cephalexin · direct sigmoid Emax (Hill) effect | — | Mitsuoka K et al., Direct evidence for efficient transport…, Biological & pharmaceutical… (2009) | [10.1248/bpb.32.1459](https://doi.org/10.1248/bpb.32.1459) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:46 | 1:55 | 2/1/0 | 2/0/0 | 0/0/0 | 134,791/7,718 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haynes_2025.pdf` | Haynes AS et al., Oral Cephalexin Population Pharmacokine…, Journal of the Pediatric In… (2025) | popPK | 10 | [10.1093/jpids/piaf088](https://doi.org/10.1093/jpids/piaf088) | [40995926](https://pubmed.ncbi.nlm.nih.gov/40995926) | The study is a population PK analysis of cephalexin in infants, but the specific numeric parameter estimates (CL, V, ka) are not listed in the provided abstract text, likely residing in the full results tables or figures not included. |
| `Haynes_2024.pdf` | Haynes AS et al., Cefadroxil and cephalexin pharmacokinet…, Antimicrobial agents and ch… (2024) | popPK | 9 | [10.1128/aac.00182-24](https://doi.org/10.1128/aac.00182-24) | [38597672](https://pubmed.ncbi.nlm.nih.gov/38597672) | The study reports population PK modeling for cephalexin, but the specific numeric parameter values (CL, V) are not listed in the provided abstract, only the half-life and qualitative model structure are mentioned. |
| `Koroleva_1981.pdf` | Koroleva VG et al., [Cephalexin pharmacokinetics], Antibiotiki (1981) | popPK | 9 | not captured | [7235651](https://pubmed.ncbi.nlm.nih.gov/7235651) | The study reports quantitative PK parameters (Tmax, half-absorption time) for cephalexin in rats and dogs using a one-compartment model. |
| `Pelligand_2024.pdf` | Pelligand L et al., Population pharmacokinetic meta-analysi…, Veterinary journal (London,… (2024) | popPK | 9 | [10.1016/j.tvjl.2024.106136](https://doi.org/10.1016/j.tvjl.2024.106136) | [38759725](https://pubmed.ncbi.nlm.nih.gov/38759725) | The paper reports a population PK meta-analysis for cefalexin in dogs, but the evidence text only contains simulation results (timing, re-administration intervals) and dosing regimens, lacking the specific numeric PK parameter values (CL, V, ka) which are likely in the full text or supplementary materials not provided. |
| `Yamada_2022.pdf` | Yamada T et al., Probability of target attainment of ora…, Diagnostic microbiology and… (2022) | popPK | 9 | [10.1016/j.diagmicrobio.2022.115662](https://doi.org/10.1016/j.diagmicrobio.2022.115662) | [35321800](https://pubmed.ncbi.nlm.nih.gov/35321800) | The study performs Monte Carlo simulations using a population PK model for cefalexin to assess target attainment, but specific numeric PK parameter values (CL, V) are not listed in the provided text. |
| `Gwee_2020.pdf` | Gwee A et al., Twice- and Thrice-daily Cephalexin Dosi…, The Pediatric infectious di… (2020) | popPK | 8 | [10.1097/INF.0000000000002646](https://doi.org/10.1097/INF.0000000000002646) | [32412727](https://pubmed.ncbi.nlm.nih.gov/32412727) | The paper describes a population PK model of cefalexin in children, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract evidence. |
| `Lv_2021.pdf` | Lv X et al., Bioequivalence of cefalexin in healthy…, International journal of cl… (2021) | popPK | 5 | [10.5414/CP203986](https://doi.org/10.5414/CP203986) | [34448694](https://pubmed.ncbi.nlm.nih.gov/34448694) | Study reports non-compartmental bioequivalence statistics (Cmax, AUC) but lacks compartmental PK parameters (CL, V, ka) required for population pharmacokinetic modeling. |

<sub>queue written 2026-10-07T10:44:28.317924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bouza_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of oritavancin; cefalexin is mentioned only as a comparator antibiotic in clinical trials, not as the subject of PK parameter estimation. |
| popPK | Cattrall_2019 | relevant | 8 | 3 | The paper is a PK/PD simulation study using a population PK model for cephalexin (human data), but the specific numeric PK parameter values (CL, V, ka) are referenced in Table 2 or Supplementary Material which are not fully legible/provided in the extracted evidence text. |
| popPK | Daniel_1995 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on membrane transport kinetics, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for cefalexin. |
| popPK | Gwee_2020 | relevant | 8 | 2 | The paper describes a population PK model of cefalexin in children, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract evidence. |
| popPK | Haynes_2024 | relevant | 9 | 2 | The study reports population PK modeling for cephalexin, but the specific numeric parameter values (CL, V) are not listed in the provided abstract, only the half-life and qualitative model structure are mentioned. |
| popPK | Haynes_2025 | relevant | 10 | 4 | The study is a population PK analysis of cephalexin in infants, but the specific numeric parameter estimates (CL, V, ka) are not listed in the provided abstract text, likely residing in the full results tables or figures not included. |
| popPK | Lemaire_2009 | irrelevant | 0 | 0 | The study is an in-vitro microbiology analysis comparing the intracellular activity of ceftobiprole and other cephalosporins (including cephalexin as a comparator) against S. aureus, with no pharmacokinetic parameter measurement. |
| popPK | Li_1994 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of bacterial kinetics in vitro, not on the pharmacokinetic disposition parameters of cefalexin in a host. |
| popPK | Lv_2021 | irrelevant | 5 | 4 | Study reports non-compartmental bioequivalence statistics (Cmax, AUC) but lacks compartmental PK parameters (CL, V, ka) required for population pharmacokinetic modeling. |
| popPK | Mitsuoka_2009 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of PEPT1 transporter affinity and hydrolysis using baculovirus and cell lines, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for the drug in a biological system. |
| popPK | Pelligand_2024 | relevant | 9 | 2 | The paper reports a population PK meta-analysis for cefalexin in dogs, but the evidence text only contains simulation results (timing, re-administration intervals) and dosing regimens, lacking the specific numeric PK parameter values (CL, V, ka) which are likely in the full text or supplementary materials not provided. |
| popPK | Ryder_2026 | irrelevant | 4 | 0 | The paper is a review and simulation study that references population PK models (specifically pediatric models scaled to adults) but does not report the underlying numeric parameter values (CL, V, Q, ka) for cefalexin in the provided text. |
| popPK | Yamada_2022 | relevant | 9 | 2 | The study performs Monte Carlo simulations using a population PK model for cefalexin to assess target attainment, but specific numeric PK parameter values (CL, V) are not listed in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:44 UTC</sub>
