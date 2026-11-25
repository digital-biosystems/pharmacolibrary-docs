<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;}]"></div>

# pyrimethamine

- **generic name:** pyrimethamine
- **ATC codes:** `P01BD01`, `P01BF04`, `P01BF09`
- **DrugBank:** [DB00205](https://go.drugbank.com/drugs/DB00205) · **PubChem:** [CID 4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993)
- **molar mass:** 248.711 g/mol (C12H13ClN4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Pyrimethamine is a folic acid antagonist used primarily to treat toxoplasmosis and cystoisosporiasis. It is administered orally in tablet, capsule, or liquid forms and is well absorbed through the digestive system. While it remains a World Health Organization essential medicine, it is no longer recommended for malaria treatment due to widespread resistance.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q421072](https://www.wikidata.org/wiki/Q421072), [Wikipedia](https://en.wikipedia.org/wiki/Pyrimethamine?oldid=1385627680) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyrimethamine | parent | 248.711 | C12H13ClN4 | DrugBank | [4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993) | Falloon_1994, Odongo_2015, Salman_2011, de_2017 |
| N(4)-acetylsulfadoxine | metabolite | 352.365 | C14H16N4O5S | PubChem | [160773](https://pubchem.ncbi.nlm.nih.gov/compound/160773) | Salman_2011 |
| sulfadoxine | metabolite | 310.328 | C12H14N4O4S | PubChem | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Salman_2011 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Falloon_1994_reference](drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference.md) | — | 1-compartment (no model) | 1 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Odongo_2015_reference](drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015) | [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Salman_2011_reference](drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference.md) | — | parent + metabolite (no model) | 1 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [de_2017_reference](drugs/drug_pyrimethamine/Pyrimethamine_de2017_reference.md) | — | 2-compartment (no model) | 9 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_luciferase_reporter_assay](drugs/drug_pyrimethamine/pd_Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_l.md) | T. gondii parasite viability (RH-2F tachyzoites, luciferase reporter assay) ← pyrimethamine · inhibition effect | — | Adeyemi OS et al., The In Vitro Anti-Parasitic Activities…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph16030447](https://doi.org/10.3390/ph16030447) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:15 | 0:04 | 0/4/0 | 1/0/0 | 0/0/0 | 3,783/180 | einfracz / qwen3.8-27b | 11 | 2/9 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 72 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | In vitro Toxoplasma drug-efficacy study; pyrimethamine is only a comparator, with no PK parameters reported. |
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | In vitro anti-Toxoplasma study of emodin; pyrimethamine is only a positive-control comparator with no PK parameters. |
| popPK | Bell_2011 | relevant | 10 | 0 | The paper describes a population PK study for pyrimethamine, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| PGx | Bell_2011 | not_relevant | 0 | 0 | The study focuses on population pharmacokinetics of pyrimethamine in children but does not investigate the effects of any gene variants or pharmacogenomic factors on drug exposure. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic activity (EC50) of new compounds and pyrimethamine against T. gondii, but contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Elati_2026 | not_relevant | 0 | 0 | The paper studies the activity of new purine analogues against Toxoplasma gondii, not the pharmacogenomics of pyrimethamine. |
| PGx | Falloon_1994 | not_relevant | 0 | 0 | The paper is a clinical pharmacokinetic study of dapsone and pyrimethamine that does not mention or analyze any genetic variants, genotypes, or phenotypes. |
| popPK | Jafari_2021 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator in an anti-Toxoplasma efficacy study; no PK parameters (CL, V, half-life, model) are reported. |
| popPK | Karunajeewa_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloroquine and its metabolite, not pyrimethamine. |
| PGx | Karunajeewa_2010 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of chloroquine in pregnancy, not pyrimethamine, and reports no genetic variants or pharmacogenomic effects. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | This is an in vitro/in vivo efficacy study of tilmicosin and ATLL against T. gondii; pyrimethamine is only a positive-control comparator with no PK parameters reported. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of piperaquine in breast milk, not pyrimethamine. |
| PGx | Moore_2015 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of piperaquine, not pyrimethamine, and contains no data on pharmacogenomic effects. |
| popPK | Ndlovu_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry study reporting anti-parasitic activity (EC50) of novel compounds with pyrimethamine as a comparator, not a pharmacokinetic study. |
| PGx | Ndlovu_2024 | not_relevant | 0 | 0 | The paper reports in vitro activity of novel compounds against T. gondii and does not investigate pharmacogenomic effects on the PK or PD of pyrimethamine. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | The paper reports in vitro susceptibility data (EC50) for antimalarials including pyrimethamine, not pharmacokinetic parameters (CL, V, t1/2) for the drug in vivo. |
| PGx | Philipps_1998 | not_relevant | 0 | 0 | The paper reports in vitro drug susceptibility of parasite isolates, not pharmacogenomic effects of human host genetics on PK or PD parameters. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator (EC50 0.60 µM in Fig. S1, not provided); no PK parameters for pyrimethamine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for mefloquine and its metabolite, not pyrimethamine. |
| PGx | Ramharter_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of mefloquine, not pyrimethamine. |
| popPK | Salman_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of azithromycin, and pyrimethamine is only a co-administered comparator drug. |
| PGx | Salman_2010 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin in pregnancy and does not report any pharmacogenomic effects on pyrimethamine. |
| PGx | Salman_2011 | not_relevant | 0 | 0 | The paper investigates dose-related pharmacokinetics in infants but does not report any gene variant or genotype influencing PK parameters. |
| popPK | Zuidema_1986 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of dapsone, with pyrimethamine only mentioned as a co-administered drug for malaria prophylaxis without any PK parameters provided for it. |
| PGx | Zuidema_1986 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics of dapsone, not pyrimethamine. |
| popPK | da_2025 | irrelevant | 0 | 0 | The study focuses on the in vitro anti-parasitic activity of novel marinoquinolines, with pyrimethamine mentioned only as background context for current treatment; no pharmacokinetic parameters for pyrimethamine are reported. |
| PGx | da_2025 | not_relevant | 0 | 0 | The paper investigates novel marinoquinoline derivatives against Toxoplasma gondii and does not report any pharmacogenomic effects on the PK or PD parameters of pyrimethamine. |
| popPK | van_2025 | irrelevant | 0 | 0 | This is a meta-analysis of IPTp-SP effectiveness and parasite resistance markers, with no PK parameters (CL, V, ka, half-life, or PK model) for pyrimethamine reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D&body=Drug%3A%20pyrimethamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrimethamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:14 UTC</sub>
