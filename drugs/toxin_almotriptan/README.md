<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Almotriptan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Almotriptan_McEwen2004_reference&quot;,&quot;label&quot;:&quot;McEwen_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_almotriptan/Almotriptan_McEwen2004_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Almotriptan_McEnroe2005_reference&quot;,&quot;label&quot;:&quot;McEnroe_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_almotriptan/Almotriptan_McEnroe2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Almotriptan

- **generic name:** Almotriptan
- **T3DB:** [T3D2931](http://www.t3db.ca/toxins/T3D2931) · **DrugBank:** [DB00918](https://go.drugbank.com/drugs/DB00918) · **PubChem:** [CID 123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606)
- **groups:** approved

## About

Almotriptan is a triptan drug for the treatment of migraine headaches. Almotriptan is in a class of medications called selective serotonin receptor agonists. It works by narrowing blood vessels in the brain, stopping pain signals from being sent to the brain, and stopping the release of certain natural substances that cause pain, nausea, and other symptoms of migraine. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** Almotriptan is indicated for the acute treatment of migraine with or without aura in adults. [Wikipedia]
- **Mechanism of toxicity:** Almotriptan binds with high affinity to human 5-HT<sub>1B</sub> and 5-HT<sub>1D</sub> receptors leading to cranial blood vessel constriction.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2931">T3DB T3D2931</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 181183-52-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:520985">ChEBI 520985</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| almotriptan | parent | 335.466 | C17H25N3O2S | PubChem | [123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606) | Baldwin_2004, Fleishaker_2001_2, Fleishaker_2003, Jansat_2002, McEnroe_2005, McEwen_2004, Youssef_2018 |

## Start here

> **McEwen_2004_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> healthy male volunteers, n = 23. [Run it in the simulator](drugs/toxin_almotriptan/Almotriptan_McEwen2004_reference.md?tab=Simulation) · [record](drugs/toxin_almotriptan/Almotriptan_McEwen2004_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fleishaker_2001_2 · CL/F</text><circle cx="338.7" cy="30.0" r="4" fill="#ef6c00"><title>Fleishaker_2001_2 · CL/F: 26.6 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fleishaker_2003 · CL/F</text><circle cx="403.4" cy="46.0" r="4" fill="#ef6c00"><title>Fleishaker_2003 · CL/F: 40.7 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [McEwen_2004_reference](drugs/toxin_almotriptan/Almotriptan_McEwen2004_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | McEwen J et al., Pharmacokinetics and safety of oral alm…, Biopharmaceutics & drug dis… (2004) | [10.1002/bdd.412](https://doi.org/10.1002/bdd.412) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Baldwin_2004_reference](drugs/toxin_almotriptan/Almotriptan_Baldwin2004_reference.md) | held back | 1-compartment, oral | 1 | Baldwin JR et al., A comparison of the pharmacokinetics an…, Cephalalgia : an internatio… (2004) | [10.1111/j.1468-2982.2004.00673.x](https://doi.org/10.1111/j.1468-2982.2004.00673.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Fleishaker_2001_2_reference](drugs/toxin_almotriptan/Almotriptan_Fleishaker2001v2_reference.md) | held back | 1-compartment, oral | 3 | Fleishaker JC et al., Effect of MAO-A inhibition on the pharm…, British journal of clinical… (2001) | [10.1046/j.1365-2125.2001.01367.x](https://doi.org/10.1046/j.1365-2125.2001.01367.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Fleishaker_2003_reference](drugs/toxin_almotriptan/Almotriptan_Fleishaker2003_reference.md) | held back | 1-compartment, oral | 3 | Fleishaker JC et al., Interaction between ketoconazole and al…, Journal of clinical pharmac… (2003) | [10.1177/0091270003252242](https://doi.org/10.1177/0091270003252242) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q75 — no SI value to build from</sub> | [McEnroe_2005_reference](drugs/toxin_almotriptan/Almotriptan_McEnroe2005_reference.md) | ▶ model + simulator | retention, 1 pool | 3 | McEnroe JD et al., Clinical pharmacokinetics of almotripta…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544030-00002](https://doi.org/10.2165/00003088-200544030-00002) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Amundsen_2021_reference](drugs/toxin_almotriptan/Almotriptan_Amundsen2021_reference.md) | — | 1-compartment (no model) | 0 | Amundsen S et al., Transfer of triptans into human breast…, Basic & clinical pharmacolo… (2021) | [10.1111/bcpt.13579](https://doi.org/10.1111/bcpt.13579) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Calatayud-Pascual_2011_reference](drugs/toxin_almotriptan/Almotriptan_CalatayudPascual2011_reference.md) | — | 1-compartment (no model) | 0 | Calatayud-Pascual MA et al., Effect of iontophoresis on in vitro tra…, International journal of ph… (2011) | [10.1016/j.ijpharm.2011.06.039](https://doi.org/10.1016/j.ijpharm.2011.06.039) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Fleishaker_2001_3_reference](drugs/toxin_almotriptan/Almotriptan_Fleishaker2001v3_reference.md) | — | 1-compartment (no model) | 0 | Fleishaker JC et al., Evaluation of the potential pharmacokin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122009917](https://doi.org/10.1177/00912700122009917) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jansat_2002_reference](drugs/toxin_almotriptan/Almotriptan_Jansat2002_reference.md) | — | 1-compartment (no model) | 0 | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nageswara_2012_reference](drugs/toxin_almotriptan/Almotriptan_Nageswara2012_reference.md) | — | 1-compartment (no model) | 0 | Nageswara Rao R et al., LC-ESI-MS/MS determination of in vivo m…, Journal of chromatography.… (2012) | [10.1016/j.jchromb.2012.02.017](https://doi.org/10.1016/j.jchromb.2012.02.017) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM popPK screen).">rat</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Youssef_2018_reference](drugs/toxin_almotriptan/Almotriptan_Youssef2018_reference.md) | — | 1-compartment (no model) | 1 | Youssef NAHA et al., A novel nasal almotriptan loaded solid…, International journal of ph… (2018) | [10.1016/j.ijpharm.2018.07.014](https://doi.org/10.1016/j.ijpharm.2018.07.014) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=almotriptan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `FMO3` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HTR1B (target), HTR1D (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 17:59 | 8:59 | 5/6/0 | 0/0/0 | 0/0/0 | 236,817/64,442 | ollama / glm-5.3-flash | 4 | 0/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 54 returned
- **screened:** 11  ·  **relevant:** 11
- **records:** 11  ·  extracted 1  ·  needs review 4  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_17 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baldwin_2004.pdf` | Baldwin JR et al., A comparison of the pharmacokinetics an…, Cephalalgia : an internatio… (2004) | popPK | 10 | [10.1111/j.1468-2982.2004.00673.x](https://doi.org/10.1111/j.1468-2982.2004.00673.x) | [15030538](https://pubmed.ncbi.nlm.nih.gov/15030538) | Human PK study of almotriptan with Cmax, AUC, half-life, CLPO, CLR values (means with 90% CI reported in abstract), though full numeric tables may be in the body not this evidence. |
| `Fleishaker_2003.pdf` | Fleishaker JC et al., Interaction between ketoconazole and al…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270003252242](https://doi.org/10.1177/0091270003252242) | [12723463](https://pubmed.ncbi.nlm.nih.gov/12723463) | Report gives direct numeric PK parameters for almotriptan (AUC, Cmax, oral and renal clearance, urinary excretion fraction) in both control and ketoconazole conditions. |
| `Jansat_2002.pdf` | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) | [12463724](https://pubmed.ncbi.nlm.nih.gov/12463724) | Full PK parameters (bioavailability, t½, clearance, volume, renal excretion) for almotriptan are reported directly in the abstract text with numeric values. |
| `McEnroe_2005.pdf` | McEnroe JD et al., Clinical pharmacokinetics of almotripta…, Clinical pharmacokinetics (2005) | popPK | 10 | [10.2165/00003088-200544030-00002](https://doi.org/10.2165/00003088-200544030-00002) | [15762767](https://pubmed.ncbi.nlm.nih.gov/15762767) | A review reporting its own compiled pharmacokinetic parameters (half-life ~3 h, bioavailability 69.1%, clearance fractions) for almotriptan in humans; some detailed values may derive from underlying trials but key numbers are present in the text. |
| `Fleishaker_2001_2.pdf` | Fleishaker JC et al., Effect of MAO-A inhibition on the pharm…, British journal of clinical… (2001) | popPK | 9 | [10.1046/j.1365-2125.2001.01367.x](https://doi.org/10.1046/j.1365-2125.2001.01367.x) | [11422001](https://pubmed.ncbi.nlm.nih.gov/11422001) | Reports numeric PK parameters for almotriptan itself (AUC, clearance, half-life, renal clearance) directly in the evidence. |
| `McEwen_2004.pdf` | McEwen J et al., Pharmacokinetics and safety of oral alm…, Biopharmaceutics & drug dis… (2004) | popPK | 9 | [10.1002/bdd.412](https://doi.org/10.1002/bdd.412) | [15386481](https://pubmed.ncbi.nlm.nih.gov/15386481) | Human volunteer PK of almotriptan with quantitative parameters (t½ ~3 h, 27–39% urinary excretion) directly stated in the abstract; full parameter tables (Cmax, AUC) may rely on figures/tables not included. |
| `Fleishaker_2000.pdf` | Fleishaker JC et al., Pharmacokinetic interaction between ver…, Clinical pharmacology and t… (2000) | popPK | 8 | [10.1067/mcp.2000.106292](https://doi.org/10.1067/mcp.2000.106292) | [10824628](https://pubmed.ncbi.nlm.nih.gov/10824628) | Human pharmacokinetic parameters for almotriptan (Vd, oral and renal clearance, Cmax, AUC) are the study's subject, but the abstract gives no numeric values, so the numbers likely reside in tables/figures not included. |
| `Fleishaker_2001_3.pdf` | Fleishaker JC et al., Evaluation of the potential pharmacokin…, Journal of clinical pharmac… (2001) | popPK | 8 | [10.1177/00912700122009917](https://doi.org/10.1177/00912700122009917) | [11210405](https://pubmed.ncbi.nlm.nih.gov/11210405) | Human volunteer PK parameters (Cmax, AUC) for almotriptan with numeric values are reported directly in the abstract, though clearance/half-life values are not shown. |
| `Saito_2023.pdf` | Saito A et al., Impact of Direction of Transport on the…, Drug metabolism and disposi… (2023) | popPK | 8 | [10.1124/dmd.122.001115](https://doi.org/10.1124/dmd.122.001115) | [36669855](https://pubmed.ncbi.nlm.nih.gov/36669855) | Almotriptan is a test substrate with in vitro uptake and in vivo renal secretory clearance parameters measured in mice, but the individual numeric values for almotriptan are not shown in the provided evidence (only aggregate statistics). |
| `Chryssafidis_2022.pdf` | Chryssafidis P et al., Re-writing Oral Pharmacokinetics Using…, Pharmaceutical research (2022) | popPK | 7 | [10.1007/s11095-022-03230-0](https://doi.org/10.1007/s11095-022-03230-0) | [35378697](https://pubmed.ncbi.nlm.nih.gov/35378697) | Almotriptan oral PK data were fitted with PBFTPK models and parameters (τ, input rates) estimated, but no numeric values appear in the provided evidence; they likely live in tables/figures not included. |
| `Oberhardt_2012.pdf` | Oberhardt F et al., Oral sumatriptan and almotriptan--delim…, Headache (2012) | popPK | 7 | [10.1111/j.1526-4610.2012.02113.x](https://doi.org/10.1111/j.1526-4610.2012.02113.x) | [22435741](https://pubmed.ncbi.nlm.nih.gov/22435741) | A compartmental PK model of oral almotriptan disposition is reported, but numeric parameter values are not present in the abstract (likely in figures/tables). |
| `Calatayud-Pascual_2011.pdf` | Calatayud-Pascual MA et al., Effect of iontophoresis on in vitro tra…, International journal of ph… (2011) | popPK | 6 | [10.1016/j.ijpharm.2011.06.039](https://doi.org/10.1016/j.ijpharm.2011.06.039) | [21736929](https://pubmed.ncbi.nlm.nih.gov/21736929) | Reports numeric in vitro transdermal flux/permeability values for almotriptan (264±24 μg/cm²h) in the abstract itself, though full permeability coefficients may live in the full text. |
| `Nageswara_2012.pdf` | Nageswara Rao R et al., LC-ESI-MS/MS determination of in vivo m…, Journal of chromatography.… (2012) | popPK | 6 | [10.1016/j.jchromb.2012.02.017](https://doi.org/10.1016/j.jchromb.2012.02.017) | [22406349](https://pubmed.ncbi.nlm.nih.gov/22406349) | Rat PK study of almotriptan with numeric values in evidence (Cmax 69.85 ng/mL at 0.3 h after 5 mg/kg oral dose, LLOQ and calibration range), though a full parameter set (half-life, clearance) may not be tabulated. |
| `Youssef_2018.pdf` | Youssef NAHA et al., A novel nasal almotriptan loaded solid…, International journal of ph… (2018) | popPK | 6 | [10.1016/j.ijpharm.2018.07.014](https://doi.org/10.1016/j.ijpharm.2018.07.014) | [30033394](https://pubmed.ncbi.nlm.nih.gov/30033394) | Almotriptan is the subject of an in vivo pharmacokinetic/brain-delivery study with numeric brain:blood ratios reported in the abstract, though full kinetic parameters (Cmax, AUC, t½) likely reside in tables/figures not fully provided. |
| `Amundsen_2021.pdf` | Amundsen S et al., Transfer of triptans into human breast…, Basic & clinical pharmacolo… (2021) | popPK | 5 | [10.1111/bcpt.13579](https://doi.org/10.1111/bcpt.13579) | [33730376](https://pubmed.ncbi.nlm.nih.gov/33730376) | Human lactation study reports a numeric relative infant dose (1.8%) for almotriptan milk transfer, a quantitative excretion/dissemination measure, though only one participant and limited kinetic parameters. |
| `Fleishaker_2001.pdf` | Fleishaker JC et al., Lack of pharmacokinetic interaction bet…, Cephalalgia : an internatio… (2001) | popPK | 5 | [10.1046/j.1468-2982.2001.00151.x](https://doi.org/10.1046/j.1468-2982.2001.00151.x) | [11298665](https://pubmed.ncbi.nlm.nih.gov/11298665) | Almotriptan is the subject with PK parameters (AUC, clearance, half-life) reported, but numeric values are not shown in the abstract text. |
| `Salva_2003.pdf` | Salva M et al., Identification of the human liver enzym…, Drug metabolism and disposi… (2003) | popPK | 5 | [10.1124/dmd.31.4.404](https://doi.org/10.1124/dmd.31.4.404) | [12642466](https://pubmed.ncbi.nlm.nih.gov/12642466) | Identifies almotriptan-metabolising enzymes (Km/Vmax-type enzyme data may exist) but the evidence shown contains no numeric parameter values, which may be in tables/figures not provided. |

<sub>queue written 2026-11-12 17:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adelman_2001 | irrelevant | 2 | 0 | A qualitative clinical review of triptans mentioning almotriptan's efficacy and half-life conceptually but with no numeric kinetic parameters or tables in the evidence. |
| popPK | Balbisi_2002 | irrelevant | 3 | 1 | Narrative review repeating pharmacokinetic properties (bioavailability, half-life) without its own derived parameters or tables of values. |
| popPK | Belvis_2014 | irrelevant | 0 | 0 | It is a narrative review of migraine treatment mentioning almotriptan only qualitatively, with no kinetic parameters of its own and no numeric values in evidence. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | A qualitative review of triptan selection with no numeric kinetic parameters; mentions pharmacokinetics only in general terms. |
| PGx | Buzzi_2008 | not_relevant | 5 | 1 | Review abstract only discusses general pharmacogenetic variability of almotriptan metabolism without any specific PK/PD parameter changes or effect sizes. |
| popPK | Chryssafidis_2022 | relevant | 7 | 3 | Almotriptan oral PK data were fitted with PBFTPK models and parameters (τ, input rates) estimated, but no numeric values appear in the provided evidence; they likely live in tables/figures not included. |
| popPK | Dahlöf_2002 | irrelevant | 2 | 1 | Narrative clinical review of efficacy/tolerability with only qualitative PK statements (absorption fraction) and no numeric kinetic parameters, none original. |
| popPK | Deleu_2000 | irrelevant | 4 | 0 | A comparative review of triptans' pharmacokinetics, but no numeric kinetic values for almotriptan are present in the provided evidence. |
| popPK | Fleishaker_2000 | relevant | 8 | 2 | Human pharmacokinetic parameters for almotriptan (Vd, oral and renal clearance, Cmax, AUC) are the study's subject, but the abstract gives no numeric values, so the numbers likely reside in tables/figures not included. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | Reports a drug-drug interaction (verapamil-almotriptan) on PK parameters, not a gene variant/genotype effect. |
| popPK | Fleishaker_2001 | relevant | 5 | 3 | Almotriptan is the subject with PK parameters (AUC, clearance, half-life) reported, but numeric values are not shown in the abstract text. |
| PGx | Fleishaker_2003 | not_relevant | 0 | 0 | Drug-drug interaction with ketoconazole, no gene variant/genotype/phenotype effect reported. |
| popPK | Fraser_2012 | irrelevant | 0 | 0 | The kinetic parameters reported (AUC, Cmax) are for rizatriptan; almotriptan is only mentioned as an approved comparator, with no kinetic data of its own. |
| PGx | McEnroe_2005 | not_relevant | 6 | 5 | Mentions CYP2D6/MAO-A metabolism but reports no genotype/phenotype-stratified PK or PD effect, only drug-drug interactions and organ impairment. |
| popPK | Oberhardt_2012 | relevant | 7 | 2 | A compartmental PK model of oral almotriptan disposition is reported, but numeric parameter values are not present in the abstract (likely in figures/tables). |
| popPK | Saito_2023 | relevant | 8 | 3 | Almotriptan is a test substrate with in vitro uptake and in vivo renal secretory clearance parameters measured in mice, but the individual numeric values for almotriptan are not shown in the provided evidence (only aggregate statistics). |
| popPK | Salva_2003 | relevant | 5 | 2 | Identifies almotriptan-metabolising enzymes (Km/Vmax-type enzyme data may exist) but the evidence shown contains no numeric parameter values, which may be in tables/figures not provided. |
| popPK | Sun_2013 | irrelevant | 4 | 2 | This is a systematic review of migraine trials noting only that adolescent and adult pharmacokinetic profiles were "statistically similar," with no numeric kinetic parameters for almotriptan present in the evidence; values would live in FDA submissions/references not provided. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 2 | 2 | A comparative review; almotriptan appears only as an efficacy comparator with a therapeutic gain, no almotriptan-specific kinetic parameter values (its half-life is not given numerically). |
| popPK | Tfelt-Hansen_2011 | irrelevant | 3 | 4 | A clinical review of dose–response and tolerability; only bioavailability values (80% almotriptan, 14% sumatriptan) cited from other sources, no original kinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balmotriptan%5D&body=Drug%3A%20almotriptan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_almotriptan/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 17:55 UTC</sub>
