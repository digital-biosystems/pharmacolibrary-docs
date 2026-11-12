<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Microcystin-LR&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MicrocystinLr_Yokoyama2003_reference&quot;,&quot;label&quot;:&quot;Yokoyama_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_microcystin_lr/MicrocystinLr_Yokoyama2003_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Microcystin-LR

- **generic name:** Microcystin-LR
- **T3DB:** [T3D3602](http://www.t3db.ca/toxins/T3D3602) · **PubChem:** [CID 445434](https://pubchem.ncbi.nlm.nih.gov/compound/445434)

## About

Microcystin-LR (MC-LR) is a naturally occurring toxin produced by cyanobacteria. It is one of a large family of microcystins. It is considered the most toxic compound of this family. …

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral
- **Sources and uses:** Microcystins are produced by the cyanobacterial cells. When the algae dies, the cell walls burst, releasing the toxin into the water.
- **Mechanism of toxicity:** The site of action of microcystins is the hepatocyte, the commonest cell type in the liver. They act by disrupting the cytoskeleton, the adaptable protein framework that constantly shapes and reshapes the cell as it responds to the environment. …
- **Health effects:** Liver damage. While microcystin-LR does not cause cancer, microcystin may stimulate the growth of cancer cells.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.
- **Minimal risk levels (ATSDR):** WHO developed a drinking water concentration limit of 1.5 μg/L for microcystin LR. They assumed that a 60 kg (132 lbs.) person drinks two liters of water each day and that 80% of the two liters is from a contaminated source.
- **Acute toxicity:** LD50 for rats and mice are in the range 36-122 micrograms/kg with the inhalation toxicity 180 mg/min/m3 or 43 micrograms/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3602">T3DB T3D3602</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 101043-37-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6925">ChEBI 6925</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Microcystin-LR (microcystin_lr) | parent | 995.189 | C49H74N10O12 | PubChem | [445434](https://pubchem.ncbi.nlm.nih.gov/compound/445434) | Henri_2014, Ito_2001, Robinson_1991, Yokoyama_2003 |

## Start here

> **Yokoyama_2003_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> freshwater bivalves (Unio douglasiae). [Run it in the simulator](drugs/toxin_microcystin_lr/MicrocystinLr_Yokoyama2003_reference.md?tab=Simulation) · [record](drugs/toxin_microcystin_lr/MicrocystinLr_Yokoyama2003_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: a value printed only as a range — the record carries its midpoint</sub><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Robinson_1991_reference](drugs/toxin_microcystin_lr/MicrocystinLr_Robinson1991_reference.md) | held back | retention, 2 pools | 5 | Robinson NA et al., Tissue distribution, excretion and hepa…, The Journal of pharmacology… (1991) | — |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q75 — no SI value to build from</sub> | [Yokoyama_2003_reference](drugs/toxin_microcystin_lr/MicrocystinLr_Yokoyama2003_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Yokoyama A et al., Depuration kinetics and persistence of…, Environmental toxicology (2003) | [10.1002/tox.10102](https://doi.org/10.1002/tox.10102) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Clarke_2019_reference](drugs/toxin_microcystin_lr/MicrocystinLr_Clarke2019_reference.md) | — | 1-compartment (no model) | 0 | Clarke JD et al., Nonalcoholic fatty liver disease alters…, Toxicon : official journal… (2019) | [10.1016/j.toxicon.2019.03.002](https://doi.org/10.1016/j.toxicon.2019.03.002) |
| <span class="pk-rf" hidden data-species="in vitro" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.60).">in vitro</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Henri_2014_reference](drugs/toxin_microcystin_lr/MicrocystinLr_Henri2014_reference.md) | — | 1-compartment (no model) | 1 | Henri J et al., Low in vitro permeability of the cyanot…, Toxicon : official journal… (2014) | [10.1016/j.toxicon.2014.07.023](https://doi.org/10.1016/j.toxicon.2014.07.023) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Ito_2001_reference](drugs/toxin_microcystin_lr/MicrocystinLr_Ito2001_reference.md) | — | 1-compartment (no model) | 2 | Ito E et al., Intratracheal administration of microcy…, Toxicon : official journal… (2001) | [10.1016/s0041-0101(00)00124-0](https://doi.org/10.1016/s0041-0101(00)00124-0) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 10:42 | 21:12 | 2/3/0 | 0/0/0 | 0/0/0 | 496,165/53,248 | ollama / glm-5.3-flash | 14 | 4/7 | 14/0 | 0 |

## Coverage

- **PubMed hits:** 169 matched, 102 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Robinson_1991.pdf` | Robinson NA et al., Tissue distribution, excretion and hepa…, The Journal of pharmacology… (1991) | popPK | 10 |  | [1988656](https://pubmed.ncbi.nlm.nih.gov/1988656) | Full numeric kinetic data (half-lives, tissue retention, excretion percentages) for microcystin-LR are present in the abstract. |
| `Clarke_2019.pdf` | Clarke JD et al., Nonalcoholic fatty liver disease alters…, Toxicon : official journal… (2019) | popPK | 8 | [10.1016/j.toxicon.2019.03.002](https://doi.org/10.1016/j.toxicon.2019.03.002) | [30849452](https://pubmed.ncbi.nlm.nih.gov/30849452) | Toxicokinetic study in rats reporting AUC and biliary clearance changes, but numeric values appear in the full paper/text not shown beyond summary descriptions. |
| `Malandrucco_2026.pdf` | Malandrucco V et al., MC-LR detoxication in human and rats: i…, Toxicology letters (2026) | popPK | 8 | [10.1016/j.toxlet.2026.111937](https://doi.org/10.1016/j.toxlet.2026.111937) | [42259476](https://pubmed.ncbi.nlm.nih.gov/42259476) | Kinetic parameters (Km, Vmax, Cli) for MC-LR GSH conjugation in human and rat hepatic, intestinal and renal cytosols are explicitly reported, but specific numeric values appear not to be included in the provided evidence. |
| `Williams_1995.pdf` | Williams DE et al., Tissue distribution and clearance of tr…, Toxicon : official journal… (1995) | popPK | 8 | [10.1016/0041-0101(94)00154-z](https://doi.org/10.1016/0041-0101(94)00154-z) | [7597716](https://pubmed.ncbi.nlm.nih.gov/7597716) | Quantitative tissue distribution, % injected dose retention and whole-body clearance time course of microcystin-LR are given numerically in the abstract. |
| `Yokoyama_2003.pdf` | Yokoyama A et al., Depuration kinetics and persistence of…, Environmental toxicology (2003) | popPK | 8 | [10.1002/tox.10102](https://doi.org/10.1002/tox.10102) | [12539145](https://pubmed.ncbi.nlm.nih.gov/12539145) | Numeric uptake concentrations and first-order depuration rate constants (kd = 0.142 and 0.226 day⁻¹) for microcystin-LR are reported directly in the abstract. |
| `Pires_2004.pdf` | Pires LM et al., Assimilation and depuration of microcys…, Aquatic toxicology (Amsterd… (2004) | popPK | 7 | [10.1016/j.aquatox.2004.06.004](https://doi.org/10.1016/j.aquatox.2004.06.004) | [15312721](https://pubmed.ncbi.nlm.nih.gov/15312721) | Reports uptake/depuration time course with numeric tissue toxin concentrations in zebra mussels, though rate constants and full kinetics may not be fully provided. |
| `Henri_2014.pdf` | Henri J et al., Low in vitro permeability of the cyanot…, Toxicon : official journal… (2014) | popPK | 6 | [10.1016/j.toxicon.2014.07.023](https://doi.org/10.1016/j.toxicon.2014.07.023) | [25110175](https://pubmed.ncbi.nlm.nih.gov/25110175) | In vitro Caco-2 (human cell line) transport study reports quantitative permeability and compartmental fractions of MC-LR, though full numeric parameter values are only partly given in the abstract and model estimates may lie in the paper body/figures. |
| `Ito_2001.pdf` | Ito E et al., Intratracheal administration of microcy…, Toxicon : official journal… (2001) | popPK | 6 | [10.1016/s0041-0101(00)00124-0](https://doi.org/10.1016/s0041-0101(00)00124-0) | [10978744](https://pubmed.ncbi.nlm.nih.gov/10978744) | Reports a quantitative disposition/retention time course for microcystin-LR in mice (60 min lag before hepatic accumulation, ~2-week organ clearance), with values present in the evidence. |
| `Williams_1997.pdf` | Williams DE et al., 14C-labeled microcystin-LR administered…, Toxicon : official journal… (1997) | popPK | 6 | [10.1016/s0041-0101(96)00196-1](https://doi.org/10.1016/s0041-0101(96)00196-1) | [9241792](https://pubmed.ncbi.nlm.nih.gov/9241792) | Kinetic data (tissue distribution, clearance, covalent binding) for microcystin-LR in salmon are described, but numeric values appear to live in figures/tables not included in the evidence. |
| `Xie_2004.pdf` | Xie L et al., Dynamics of microcystins-LR and -RR in…, Environmental pollution (Ba… (2004) | popPK | 6 | [10.1016/j.envpol.2003.08.011](https://doi.org/10.1016/j.envpol.2003.08.011) | [14638304](https://pubmed.ncbi.nlm.nih.gov/14638304) | Tissue uptake/depuration time-course concentrations of MC-LR in silver carp are given, but no explicit half-life or rate constants are computed. |

<sub>queue written 2026-11-11 10:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bischoff_2001 | irrelevant | 2 | 0 | This is a review article on microcystin-LR toxicokinetics with no numeric kinetic parameters present in the evidence; any values it repeats would belong to other papers. |
| popPK | Boegehold_2019 | irrelevant | 0 | 0 | This is a lethal-concentration (LC50) toxicity study in mussel veligers, not a toxicokinetic study; no half-life, rate constant, partition coefficient, or disposition model for microcystin-LR is reported. |
| popPK | Breidenbach_2022 | irrelevant | 2 | 2 | In vitro airway epithelial toxicity/ transcriptomics study with deposition concentrations and mucociliary clearance velocities, but no toxicokinetic parameters (half-life, clearance, partition coefficients) for MC-LR itself. |
| PGx | Brzuzan_2016 | not_relevant | 0 | 0 | Study reports MC-LR exposure-induced miRNA expression changes, not a gene variant/genotype altering a PK/PD parameter of MC-LR. |
| PGx | Buratti_2015 | not_relevant | 0 | 5 | Species/GSH-dependent GST conjugation kinetics of microcystin-LR reported, but no gene variant/genotype/phenotype effects. |
| popPK | Carmichael_2006 | irrelevant | 1 | 2 | This is an environmental exposure/outcome study measuring microcystin concentrations in water, algal cultures and grebe tissues by ELISA, with no kinetic parameters (half-life, clearance, rate constants, etc.) for microcystin-LR's disposition. |
| popPK | Choudhuri_2020 | irrelevant | 2 | 0 | Microcystin-LR appears only qualitatively as an OATP transport example; no numeric kinetic parameters and no data tables are present in the evidence. |
| PGx | Choudhuri_2020 | not_relevant | 3 | 2 | Microcystin-LR OATP transport is described qualitatively via knockout mice; no variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Chowdhury_2024 | not_relevant | 4 | 2 | No genetic variant/genotype is tested; OATP expression differences are culture-model effects, not pharmacogenomic effects on MC-LR PK/PD. |
| PGx | Cordeiro-Araújo_2016 | not_relevant | 0 | 0 | Study of MC-LR bioaccumulation in plants with no gene variant/genotype or pharmacogenomic effect on PK/PD parameters. |
| PGx | Cui_2011 | not_relevant | 1 | 2 | Gene expression changes after MC-LR exposure are reported, but no genotype/variant effect on a PK/PD parameter is quantified. |
| popPK | Fu_2026 | irrelevant | 1 | 5 | This is an epidemiological exposure–outcome study reporting urinary MC-LR concentrations and semen quality associations, with no kinetic parameters (half-life, clearance, uptake/excretion rate, etc.) for microcystin-LR; although a median urinary concentration is numerically present, it is a population exposure level, not a toxicokinetic parameter. |
| popPK | Ge_2026 | irrelevant | 1 | 1 | This is an exposure/biomonitoring study with urinary concentrations and ICC metrics only, no kinetic parameter (half-life, clearance, rate constant) for MC-LR. |
| popPK | Henri_2021 | irrelevant | 2 | 2 | The study's subject is microcystin-RR; MC-LR appears only as a comparator with permeability values cited from another paper, so no MC-LR-specific parameters are measured or fully reported here. |
| PGx | Henri_2021 | not_relevant | 0 | 0 | Paper reports Caco-2 permeability of microcystin-RR but involves no gene variant/genotype/phenotype effect on any PK or PD parameter. |
| popPK | Ikema_2015 | irrelevant | 1 | 1 | The subject substance is okadaic acid; microcystin-LR appears only as a comparator/probe substrate for OATP transporters, with no quantitative kinetic parameters for microcystin-LR reported. |
| popPK | Iwinski_2016 | irrelevant | 1 | 0 | This is an algal exposure-response study of copper algaecides measuring MC-LR concentrations in water/cells, with no kinetic parameters (half-life, clearance, rate constants) for microcystin-LR in any organism. |
| popPK | Kinley_2017 | irrelevant | 1 | 5 | This is a copper algaecide toxicity/exposure-response study on Microcystis; MC-LR only appears as a release endpoint, with no kinetic parameters (half-life, clearance, rate constants, partitioning) for MC-LR itself, though numeric EC50 values for copper are present in the text. |
| popPK | Lance_2010 | irrelevant | 1 | 1 | Histopathology and immunohistochemical distribution of covalently bound MC-LR in snails; no kinetic parameters (no half-life, rate constants, or clearance values) and no numeric tissue burden time course beyond %NoMC staining are present. |
| PGx | Li_2011 | not_relevant | 0 | 0 | Proteomics of MCLR toxicity in zebrafish embryos; no gene variant/genotype effect on any PK/PD parameter is reported. |
| popPK | Li_2026 | irrelevant | 1 | 1 | This is a review of intestinal toxicity mechanisms with no numeric toxicokinetic parameters for MC-LR present in the evidence. |
| PGx | Lin_2015 | not_relevant | 0 | 0 | Study covers gut microbial gene profiles after MC-LR exposure; no host gene variant effect on any PK/PD parameter. |
| popPK | Ling_2024 | irrelevant | 0 | 0 | Computational study of environmental factors on microbial degradation with toxicity predictions; no kinetic parameters for MC-LR in humans or animals. |
| PGx | Ling_2026 | not_relevant | 0 | 0 | Study evaluates MC-LR hepatotoxicity in a 3D bioprinted liver model with FXR agonist intervention; no gene variant/genotype effects on PK or PD parameters are reported. |
| popPK | Lürling_2003 | irrelevant | 0 | 0 | Life-history/toxicity endpoints in Daphnia with no kinetic parameters of microcystin-LR disposition; clearance rates are feeding rates, not elimination kinetics. |
| PGx | Ma_2017 | not_relevant | 2 | 3 | Reports MC-LR-induced gene expression changes and inhibitor/inducer effects, not a gene variant/genotype altering a PK or PD parameter of MC-LR. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | In vitro cytotoxicity study of GO-MCLR adsorption complexes with no kinetic parameters (no half-life, rate constant, clearance or partition coefficient); any kinetic-like data live in a figure, not as numeric parameter values. |
| PGx | Makower_2015 | not_relevant | 1 | 0 | Study examines transcriptomic effects of microcystin-LR on Microcystis, not a gene-variant effect on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Malandrucco_2026 | relevant | 8 | 3 | Kinetic parameters (Km, Vmax, Cli) for MC-LR GSH conjugation in human and rat hepatic, intestinal and renal cytosols are explicitly reported, but specific numeric values appear not to be included in the provided evidence. |
| PGx | Malandrucco_2026 | not_relevant | 4 | 3 | Study reports GST isoform kinetic differences for MC-LR conjugation but no polymorphism/genotype-phenotype effect on a PK/PD parameter is quantified; polymorphism only mentioned as relevance. |
| popPK | McCord_2018 | irrelevant | 3 | 7 | Reports octanol-water logKow partition coefficients for MCLR (numeric values given), but these are physicochemical properties, not toxicokinetic parameters measured in humans or animals. |
| PGx | Niture_2025 | not_relevant | 1 | 5 | Study reports toxin-induced changes in CYP gene expression/cell survival in neuroblastoma cells, not any gene variant/genotype/phenotype effect on a PK or PD parameter of MC-LR. |
| popPK | Orru_2025 | irrelevant | 0 | 0 | Review of exposure-response functions for EU regulated chemicals; microcystin-LR is mentioned only as lacking a risk measure, with no kinetic parameters of any kind. |
| popPK | Ou-Yang_2025 | irrelevant | 1 | 1 | This is a mechanism/outcome study of MC-LR-induced fatty liver in zebrafish; no toxicokinetic parameter (half-life, clearance, rate constants, partition coefficients) is reported, only exposure concentrations and a benchmark dose. |
| popPK | Rezaitabar_2017 | relevant | 4 | 8 | Reports numeric bioaccumulation factors for MC-LR in fish tissues (1047 and 1272 L/kg lipid), which counts as uptake/retention parameters, though it is primarily an environmental exposure/biomonitoring study with no kinetic rate constants or half-lives. |
| popPK | Silva_2026 | irrelevant | 2 | 2 | In vitro mechanistic toxicodynamic study (PP2A, proliferation, gene expression) in HepaRG cells with no toxicokinetic parameters for MC-LR; numeric values present (fold inhibition, R2) are not kinetic parameters. |
| popPK | Steiner_2014 | irrelevant | 2 | 0 | Kinetic Km values (13.9–103 µM) are reported for model substrates (estrone-3-sulfate, methotrexate, taurocholate), not for MC-LR; MC-LR transport is only confirmed qualitatively with no numeric MC-LR kinetic parameter present. |
| PGx | Tonk_2008 | not_relevant | 0 | 0 | Study concerns amino acid availability affecting microcystin variant production in cyanobacteria, not a gene variant effect on PK/PD parameters. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; effects are exposure-drug interactions, not pharmacogenomic. |
| PGx | Wen_2018 | not_relevant | 0 | 0 | Study examines lncRNA expression changes after MC-LR exposure, not gene variants' effects on MC-LR PK/PD parameters. |
| popPK | Williams_1997 | relevant | 6 | 3 | Kinetic data (tissue distribution, clearance, covalent binding) for microcystin-LR in salmon are described, but numeric values appear to live in figures/tables not included in the evidence. |
| popPK | Woźny_2016 | irrelevant | 4 | 2 | Toxicological outcomes study in fish with qualitative MC-LR uptake/accumulation statements, but no numeric kinetic parameters (concentrations likely in figures/supplementary not provided). |
| popPK | Woźny_2026 | irrelevant | 1 | 1 | Transcriptomic/histopathology study in fish with qualitative immunoreactivity observations only; no numeric toxicokinetic parameters reported. |
| popPK | Woźny_2026_2 | irrelevant | 0 | 0 | no_text gate: only 294 chars of text extracted (&lt; 400) |
| popPK | Wu_2017 | irrelevant | 2 | 4 | An exposure/tissue-residue study in wild carp reporting MC-LR and MC-LR-Cys concentrations and metabolite ratios only, with no kinetic parameters (no half-lives, rate constants, clearances or volumes). |
| popPK | Zurawell_2007 | irrelevant | 1 | 1 | Only measured MC concentrations and tissue proportions with no kinetic parameters (half-lives, rate constants, clearance) reported in the evidence; numeric values largely absent. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmicrocystin_lr%5D&body=Drug%3A%20microcystin_lr%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_microcystin_lr/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 10:35 UTC</sub>
