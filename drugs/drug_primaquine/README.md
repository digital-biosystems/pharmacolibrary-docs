<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Sridharan2019_reference&quot;,&quot;label&quot;:&quot;Sridharan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# primaquine

- **generic name:** primaquine
- **ATC codes:** `P01BA03`
- **DrugBank:** [DB01087](https://go.drugbank.com/drugs/DB01087) · **PubChem:** [CID 4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908)
- **molar mass:** 259.3467 g/mol (C15H21N3O) — DrugBank
- **groups:** approved, investigational

## About

Primaquine is an antimalarial aminoquinoline used to treat and prevent malaria. It is administered orally as tablets. It is widely used and available as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419834](https://www.wikidata.org/wiki/Q419834), [Wikipedia](https://en.wikipedia.org/wiki/Primaquine?oldid=1370237394) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| primaquine | parent | 259.347 | C15H21N3O | DrugBank | [4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908) | Chairat_2018, Chotsiri_2024_2, Lee_2021, Sridharan_2019, Wattanakul_2024_2 |
| carboxyprimaquine (carboxy-primaquine) | metabolite | 274.32 | C15H18N2O3 | PubChem | [127542](https://pubchem.ncbi.nlm.nih.gov/compound/127542) | Chairat_2018, Chotsiri_2024_2, Lee_2021, Wattanakul_2024_2 |
| primaquine carbamoyl-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Sridharan_2019_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers and patients with hepatic or renal dysfunction, n = 53. [Run it in the simulator](drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md?tab=Simulation) · [record](drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Sridharan_2019 · CL</text><circle cx="195.1" cy="30.0" r="4" fill="#ef6c00"><title>Sridharan_2019 · CL: 10.34 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Chairat_2018 · CL/F</text><circle cx="317.3" cy="46.0" r="4" fill="#ef6c00"><title>Chairat_2018 · CL/F: 23.1 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Sridharan_2019 · V</text><circle cx="216.4" cy="30.0" r="4" fill="#ef6c00"><title>Sridharan_2019 · V: 11.9 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Chairat_2018 · V/F</text><circle cx="311.9" cy="46.0" r="4" fill="#ef6c00"><title>Chairat_2018 · V/F: 22.3 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Chairat_2018_reference](drugs/drug_primaquine/Primaquine_Chairat2018_reference.md) | — | parent + metabolite (no model) | 10 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Sridharan_2019_reference](drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Sridharan K et al., Population pharmacokinetics of primaqui…, Indian journal of pharmacol… (2019) | [10.4103/ijp.IJP_230_16](https://doi.org/10.4103/ijp.IJP_230_16) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chotsiri_2024_2_reference](drugs/drug_primaquine/Primaquine_Chotsiri2024v2_reference.md) | — | 2-compartment (no model) | 4 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lee_2021_reference](drugs/drug_primaquine/Primaquine_Lee2021_reference.md) | — | parent + metabolite (no model) | 0 | Lee WY et al., Population Pharmacokinetics of Primaqui…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050652](https://doi.org/10.3390/pharmaceutics13050652) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wattanakul_2024_2_reference](drugs/drug_primaquine/Primaquine_Wattanakul2024v2_reference.md) | — | parent + metabolite (no model) | 0 | Wattanakul T et al., Population pharmacokinetic modelling of…, Nature communications (2024) | [10.1038/s41467-024-47908-y](https://doi.org/10.1038/s41467-024-47908-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Chotivanich_2006_oocysts](drugs/drug_primaquine/pd_Chotivanich_2006_oocysts.md) | oocyst development ← primaquine · direct sigmoid Emax (Hill) effect | — | Chotivanich K et al., Transmission-blocking activities of qui…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01472-05](https://doi.org/10.1128/AAC.01472-05) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Marino_1994_percentage_methemoglobin_2](drugs/drug_primaquine/pd_Marino_1994_percentage_methemoglobin_2.md) | methemoglobinemia ← metabolite · indirect response — drug inhibits the loss of methemoglobinemia | — | Marino MT et al., Pharmacokinetics and kinetic-dynamic mo…, Drug metabolism and disposi… (1994) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:48 | 0:22 | 2/3/0 | 1/1/0 | 0/0/0 | 6,002/1,739 | einfracz / qwen3.8-27b | 30 | 1/14 | 14/1 | 1 |

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araujo-Lima_2023 | irrelevant | 0 | 0 | The study focuses on new synthetic hybrids of atorvastatin and aminoquinolines, using primaquine only as a structural reference or comparator, and the pharmacokinetic data are in silico predictions for the hybrids, not quantitative parameters for primaquine itself. |
| PGx | Araujo-Lima_2023 | not_relevant | 0 | 0 | The paper evaluates in silico PK and in vitro efficacy of new hybrids, and does not report genetic variants or gene-based changes in the PK/PD of primaquine. |
| popPK | Bolchoz_2001 | irrelevant | 1 | 0 | The study focuses on the in vitro metabolism and in vivo hemotoxicity of a primaquine metabolite (MAQ-NOH) rather than reporting population pharmacokinetic parameters (CL, V, etc.) for primaquine itself. |
| PGx | Bolchoz_2001 | not_relevant | 0 | 0 | The paper describes the formation of a hemotoxic metabolite of primaquine in rat and human microsomes but does not report pharmacogenomic data linking gene variants to changes in PK or PD parameters. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation of amodiaquine's antiviral activity against dengue virus, and primaquine is only mentioned as a screened compound without any pharmacokinetic data. |
| PGx | Boonyasuppayakorn_2014 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of amodiaquine against dengue virus and contains no information on primaquine or pharmacogenomics. |
| popPK | Brueckner_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the compound WR 238605 (a primaquine analogue), not primaquine itself. |
| PGx | Brueckner_1991 | not_relevant | 0 | 0 | The study focuses on PK/PD modeling of a primaquine analogue in dogs and does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Capela_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in-vitro pharmacology study focusing on the synthesis and anti-plasmodial activity of hybrid compounds, with no population pharmacokinetic modeling or quantitative disposition parameters for primaquine. |
| PGx | Capela_2018 | not_relevant | 0 | 0 | The paper describes the synthesis and preclinical activity of novel hybrid compounds, with no human pharmacogenomic or pharmacokinetic data reported. |
| popPK | Chotivanich_2006 | irrelevant | 0 | 0 | The study is an in vitro assessment of the transmission-blocking activity (gametocytocidal effect) of primaquine on malaria parasites in mosquitoes, reporting EC50/EC90 values rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for the drug itself. |
| PGx | Chotivanich_2006 | not_relevant | 0 | 0 | The paper evaluates the in vitro transmission-blocking activity (EC50/EC90) of primaquine, but does not report any pharmacogenomic effects or genetic variations influencing these pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chotsiri_2017 | irrelevant | 2 | 1 | Primaquine is only a co-administered probe/placebo arm; the population-PK parameters (CL/F, V, ka, t1/2) reported are for DHA and piperaquine, with no quantitative primaquine PK model values. |
| popPK | Commons_2019 | irrelevant | 0 | 0 | This is a haematological (haemoglobin response) IPD meta-analysis of vivax malaria; primaquine is a co-intervention, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported anywhere in the evidence. |
| popPK | Daher_2019_2 | irrelevant | 2 | 1 | PK parameters (AUC, half-life) are for chloroquine/mefloquine/lumefantrine; primaquine PK was not modelled and no numeric primaquine parameters are present. |
| popPK | Marino_1994 | irrelevant | 2 | 1 | The study focuses on the pharmacokinetics of the analog WR242511, not primaquine, despite mentioning primaquine as a comparator. |
| PGx | Marino_1994 | not_relevant | 0 | 0 | The paper describes PK/PD modeling for WR242511 and does not report any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Nyamwihura_2021 | irrelevant | 0 | 0 | This is a medicinal chemistry/synthesis paper on nopol-based quinoline antimalarials with in vitro EC50 data; primaquine is only mentioned as a comparator and no PK parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/antiviral efficacy study, not a pharmacokinetic study, and reports no PK parameters for primaquine. |
| PGx | Persoons_2021 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of quinoline analogues against coronaviruses and does not investigate the impact of gene variants on the pharmacokinetics or pharmacodynamics of primaquine. |
| popPK | Rajić_2018 | irrelevant | 0 | 0 | This is a synthetic chemistry/antimicrobial activity paper on primaquine derivatives; no PK parameters for primaquine are reported. |
| popPK | Watson_2017 | irrelevant | 2 | 1 | This is a model of primaquine-induced haemolysis (RBC dynamics), not a PK model of primaquine disposition; the only PK value is a half-life (~5 hr) mentioned in passing with no CL/V or population-PK parameters, and no numeric PK table is present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprimaquine%5D&body=Drug%3A%20primaquine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_primaquine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 07:50 UTC</sub>
