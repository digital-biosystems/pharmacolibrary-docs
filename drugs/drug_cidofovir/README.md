<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cidofovir&quot;}]"></div>

# cidofovir

- **generic name:** cidofovir
- **ATC codes:** `J05AB12`
- **DrugBank:** [DB00369](https://go.drugbank.com/drugs/DB00369) · **PubChem:** [CID 60613](https://pubchem.ncbi.nlm.nih.gov/compound/60613)
- **molar mass:** 279.187 g/mol (C8H14N3O6P) — DrugBank
- **groups:** approved, investigational

## About

Cidofovir is a nucleoside analogue antiviral used to treat cytomegalovirus retinitis and other related diseases. One European product has been withdrawn, but the drug remains an approved and investigational agent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423445](https://www.wikidata.org/wiki/Q423445), the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cidofovir | parent | 279.187 | C8H14N3O6P | DrugBank | [60613](https://pubchem.ncbi.nlm.nih.gov/compound/60613) | Cundy_1996, Neant_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Cundy_1996_reference](drugs/drug_cidofovir/Cidofovir_Cundy1996_reference.md) | — | 1-compartment (no model) | 3 | Cundy KC et al., Pharmacokinetics of cidofovir in monkey…, Drug metabolism and disposi… (1996) | — |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Neant_2018_reference](drugs/drug_cidofovir/Cidofovir_Neant2018_reference.md) | — | 1-compartment (no model) | 1 | Neant N et al., Model of population pharmacokinetics of…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky192](https://doi.org/10.1093/jac/dky192) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hakki_2011_drug_susceptibility_phenotypes](drugs/drug_cidofovir/pd_Hakki_2011_drug_susceptibility_phenotypes.md) | drug susceptibility phenotypes ← cidofovir · inhibition effect | — | Hakki M et al., The biology of cytomegalovirus drug res…, Current opinion in infectio… (2011) | [10.1097/QCO.0b013e32834cfb58](https://doi.org/10.1097/QCO.0b013e32834cfb58) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:06 | 0:03 | 1/1/0 | 1/0/0 | 0/0/0 | 4,152/176 | einfracz / qwen3.8-27b | 13 | 2/9 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 187 matched, 79 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altmann_2012 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of mitoxantrone and its synergy with cidofovir, reporting no pharmacokinetic parameters (clearance, volume, etc.) for cidofovir. |
| PGx | Altmann_2012 | not_relevant | 0 | 0 | The paper reports in vitro and in vivo antiviral activity and synergy of mitoxantrone with cidofovir, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Andrei_2000 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of a ganciclovir derivative and uses cidofovir only as a reference compound in vitro and in a mouse efficacy model, without reporting pharmacokinetic parameters for cidofovir. |
| PGx | Andrei_2000 | not_relevant | 0 | 0 | The paper discusses the antiviral activity of a ganciclovir derivative and does not report any pharmacogenomic effects on the PK or PD of cidofovir. |
| PGx | Aydamirov_2023 | not_relevant | 0 | 0 | In vitro antiviral efficacy study with no gene variant/genotype/phenotype effects on cidofovir PK or PD parameters. |
| popPK | Babaev_2022 | irrelevant | 0 | 0 | This is a chemistry/antiviral activity study of triterpenoid derivatives; cidofovir is only mentioned as a comparator standard, with no PK parameters reported. |
| popPK | Beadle_2006 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50 values) for novel compounds and compares them to cidofovir esters, but contains no pharmacokinetic parameters for cidofovir. |
| PGx | Beadle_2006 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro antiviral activity of (S)-HPMPA derivatives, not a pharmacogenomic effect on cidofovir. |
| popPK | Bedard_1999 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility assay using cidofovir as a positive control, reporting no pharmacokinetic parameters. |
| PGx | Bedard_1999 | not_relevant | 0 | 0 | The paper describes an in-vitro assay development for antiviral susceptibility testing and does not report any human gene variants, genotypes, or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Bhattacharjee_2024 | irrelevant | 0 | 0 | The paper is a silico (in silico) drug repurposing study for Monkeypox that does not report population-pharmacokinetic parameters for cidofovir. |
| PGx | Bhattacharjee_2024 | not_relevant | 0 | 0 | The paper focuses on drug repurposing and molecular docking for monkeypox treatment, not on pharmacogenomic effects on cidofovir pharmacokinetics or pharmacodynamics. |
| popPK | Bonvicini_2015 | irrelevant | 0 | 0 | This is an in vitro antiviral efficacy study reporting EC50/EC90 values, not a pharmacokinetic study with disposition parameters. |
| PGx | Bonvicini_2015 | not_relevant | 0 | 0 | The study evaluates the antiviral efficacy of cidofovir in cell lines but does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Borthwick_2005 | irrelevant | 0 | 0 | The paper focuses on the design of HCMV protease inhibitors and only mentions cidofovir as a comparator antiviral drug with no PK data reported. |
| PGx | Borthwick_2005 | not_relevant | 0 | 0 | The paper focuses on the design of new HCMV protease inhibitors and does not investigate pharmacogenomic effects on cidofovir. |
| popPK | Bravo_2011 | irrelevant | 0 | 0 | The study evaluates the in vivo antiviral efficacy of a cidofovir analog in guinea pigs and does not report any pharmacokinetic parameters (CL, V, half-life) for cidofovir or its analog. |
| PGx | Bravo_2011 | not_relevant | 0 | 0 | The study evaluates the antiviral efficacy of a cidofovir analog in a guinea pig model and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Breddemann_2008 | irrelevant | 2 | 0 | The paper is a review/overview of simulation techniques using cidofovir as an example, but it does not report specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Breddemann_2008 | not_relevant | 0 | 0 | The paper discusses age-dependent pharmacokinetic variations and computer simulations for cidofovir, but does not report any effects of gene variants, genotypes, or phenotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Brideau_2002 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of PNU-183792, with cidofovir serving only as a comparator drug in cell culture assays, and no PK parameters for cidofovir are reported. |
| PGx | Brideau_2002 | not_relevant | 0 | 0 | The paper describes the in vitro antiviral activity and toxicity of PNU-183792 against herpesviruses and does not contain any pharmacogenomic data or analysis of cidofovir. |
| popPK | Bua_2019 | irrelevant | 0 | 0 | The study evaluates antiviral activity and EC50 values in vitro, not pharmacokinetic disposition parameters. |
| PGx | Bua_2019 | not_relevant | 0 | 0 | The paper describes in vitro antiviral activity (EC50) of brincidofovir and cidofovir against parvovirus B19 but does not investigate gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This is an in vitro systematic review of antiviral efficacy (EC50 values against viruses), not a study of cidofovir's pharmacokinetic disposition parameters in humans or animals. |
| PGx | Chemaly_2019 | not_relevant | 0 | 0 | The paper is a systematic review of in vitro antiviral activity (EC50) and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Cherrier_2018 | irrelevant | 0 | 0 | The paper is a case report on viral resistance to antiviral agents (letermovir, ganciclovir) and does not contain any pharmacokinetic parameter estimation or quantitative disposition data for cidofovir. |
| PGx | Cherrier_2018 | not_relevant | 0 | 0 | The paper describes viral resistance mutations (UL54/UL97) causing pharmacodynamic failure in a single case, which is viral genomics rather than human pharmacogenomics. |
| popPK | Chou_2021 | irrelevant | 0 | 0 | The study reports in vitro antiviral susceptibility (EC50) of CMV to cidofovir, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Chou_2021 | not_relevant | 0 | 0 | The study investigates viral gene mutations (UL54) and their effect on drug susceptibility, which is pharmacogenomic resistance, not a host pharmacogenomic effect on pharmacokinetics or pharmacodynamics. |
| PGx | Cundy_1996 | not_relevant | 0 | 0 | The paper reports cidofovir pharmacokinetics in monkeys but does not investigate or report any influence of gene variants or genotypes on these parameters. |
| popPK | Czock_2011 | irrelevant | 0 | 0 | The text is a general discussion of nephrotoxicity mechanisms and drug interactions, containing no quantitative pharmacokinetic parameters for cidofovir. |
| PGx | Czock_2011 | not_relevant | 0 | 0 | The text discusses drug-drug interactions (cidofovir and probenecid) and general nephrotoxicity management, but contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Drouot_2016 | irrelevant | 0 | 0 | The study is an in vitro virology assay measuring EC50 values (antiviral potency) rather than pharmacokinetic disposition parameters. |
| PGx | Drouot_2016 | not_relevant | 0 | 0 | The paper evaluates in vitro drug synergy against a virus but does not investigate any genetic variants or their effects on the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Fryer_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study of porcine cytomegalovirus, not a pharmacokinetic study of cidofovir. |
| PGx | Fryer_2004 | not_relevant | 0 | 0 | The study investigates antiviral susceptibility of a virus to cidofovir but does not involve human gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gentry_2015 | irrelevant | 0 | 0 | The paper focuses on in-vitro virology and viral resistance mechanisms (UL89 mutations), reporting EC50 values for antiviral activity, not pharmacokinetic disposition parameters (CL, V, t1/2) for cidofovir. |
| PGx | Gentry_2015 | not_relevant | 0 | 0 | The paper reports a viral mutation (UL89 E256Q) conferring resistance to indole nucleosides, not a human genetic variant affecting the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Gosert_2011 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy study for a cidofovir lipid conjugate (CMX001) and does not report pharmacokinetic disposition parameters. |
| PGx | Gosert_2011 | not_relevant | 0 | 0 | The study evaluates the antiviral efficacy of CMX001 against JCV in vitro without assessing pharmacokinetic or pharmacodynamic effects modified by specific gene variants. |
| popPK | Hakki_2011 | irrelevant | 0 | 0 | The paper is a review of viral drug resistance mechanisms and does not report any pharmacokinetic parameters for cidofovir. |
| PGx | Hakki_2011 | not_relevant | 0 | 0 | This review covers viral genotypes (CMV resistance), not host pharmacogenomics. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy model using EC50 values, not a pharmacokinetic study reporting disposition parameters for cidofovir. |
| PGx | Hamilton_2020 | not_relevant | 0 | 0 | The study compares antiviral efficacy in cell and tissue models without investigating pharmacogenomic effects on PK or PD parameters. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | In-vitro antiviral/cytotoxicity study of tecovirimat vs MPXV; cidofovir is only a comparator with EC50/cytotoxicity values, no PK disposition parameters. |
| popPK | Huber_2012 | irrelevant | 0 | 0 | The paper is a review of adverse ocular reactions and contains no pharmacokinetic parameters or quantitative disposition data for cidofovir. |
| PGx | Huber_2012 | not_relevant | 0 | 0 | The paper mentions that adverse drug reactions may be influenced by pharmacogenetics in general, but does not report specific gene variants changing cidofovir's PK or PD parameters. |
| popPK | Huber_2012_2 | irrelevant | 0 | 0 | This is a review of ocular adverse drug reactions and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for cidofovir. |
| PGx | Huber_2012_2 | not_relevant | 0 | 0 | The paper mentions cidofovir only in the context of adverse ocular effects (inflammation, ciliary toxicity) and does not discuss pharmacogenomic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Ingraham_2014 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study of transporter (OAT1) kinetics, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for cidofovir. |
| PGx | Ingraham_2014 | not_relevant | 0 | 0 | The study investigates the effect of a metabolite (α-ketoglutarate) on OAT1 transport kinetics in vitro, not the effect of a gene variant or genotype on cidofovir pharmacokinetics or pharmacodynamics. |
| popPK | Jesus_2009 | irrelevant | 0 | 0 | The study is an in-vitro virology assay measuring antiviral activity (EC50) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Jesus_2009 | not_relevant | 0 | 0 | The paper evaluates cidofovir's antiviral efficacy against viral strains in vitro and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | The study reports in vitro antiviral efficacy (EC50) of cidofovir against adenovirus, not pharmacokinetic parameters. |
| PGx | Kaneko_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50/CC50) but contains no genetic data or pharmacogenomic analysis. |
| PGx | Koepf_2020 | not_relevant | 0 | 0 | Viral UL97 mutation confers ganciclovir resistance, not a host pharmacogenomic effect on cidofovir PK/PD. |
| popPK | Kornii_2019 | irrelevant | 0 | 0 | This is an in vitro antiviral activity study where cidofovir is used only as a standard drug/comparator, and no pharmacokinetic parameters are reported. |
| PGx | Kornii_2019 | not_relevant | 0 | 0 | The paper focuses on the in vitro antiviral activity and cytotoxicity of novel chemical derivatives compared to cidofovir, without investigating genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ledbetter_2015 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial for ocular antiviral activity, reporting disease scores and toxicity rather than pharmacokinetic parameters (CL, V, half-life). |
| PGx | Ledbetter_2015 | not_relevant | 0 | 0 | The study investigates the efficacy and toxicity of cidofovir in a canine model but contains no data on pharmacogenomics or gene variants affecting PK/PD parameters. |
| popPK | Lloyd_2022 | irrelevant | 0 | 0 | The paper describes the antiviral efficacy of a cidofovir prodrug (USC-373) in cell and animal models, but contains no pharmacokinetic parameters (CL, Vd, etc.) for cidofovir. |
| PGx | Lloyd_2022 | not_relevant | 0 | 0 | The paper studies the efficacy of a prodrug against VZV but contains no pharmacogenomic data. |
| popPK | Loddo_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new antiviral compounds, using cidofovir only as a reference comparator in cell-based assays without reporting any pharmacokinetic parameters. |
| PGx | Loddo_2014 | not_relevant | 0 | 0 | The paper reports the antiviral activity of new synthetic compounds against various viruses, using cidofovir only as a reference drug, and contains no information on pharmacogenomics or pharmacokinetics. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This is a systematic review of antibiotic PK in obesity; cidofovir is not mentioned at all, and no cidofovir parameters appear. |
| popPK | Mazzotta_2021 | irrelevant | 0 | 0 | This is an in vitro study on new adenovirus inhibitors where cidofovir is only used as a reference compound for antiviral activity, containing no PK data. |
| PGx | Mazzotta_2021 | not_relevant | 0 | 0 | The paper focuses on the in vitro antiviral activity of new compounds against adenovirus and does not report any pharmacogenomic effects on cidofovir. |
| popPK | McSharry_2009 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamics study using a hollow-fiber model, not a study reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for cidofovir in a biological species. |
| PGx | McSharry_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of cidofovir in an in vitro model but does not report on any pharmacogenomic effects or gene variants. |
| popPK | Meerbach_1998 | irrelevant | 0 | 0 | The paper is an in-vitro virology study assessing the inhibitory effects of compounds on Epstein-Barr virus replication, with cidofovir used only as a reference compound, and it contains no pharmacokinetic disposition parameters. |
| PGx | Meerbach_1998 | not_relevant | 0 | 0 | The study evaluates the antiviral efficacy of various analogues against EBV in vitro and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of cidofovir. |
| popPK | Mehta_2021 | irrelevant | 0 | 0 | The paper is a clinical outcomes study of cidofovir efficacy and toxicity in transplant recipients, reporting no pharmacokinetic parameters such as clearance or volume. |
| PGx | Mehta_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes (toxicity, viral clearance) of cidofovir treatment but does not investigate pharmacokinetic or pharmacodynamic parameters in relation to gene variants or genotypes. |
| popPK | Momper_2013 | relevant | 9 | 3 | The study reports PK parameters (half-life, CL-eGFR correlation) for cidofovir in humans, but specific numerical values for Clearance (CL) and Volume (V) are not explicitly listed in the text. |
| PGx | Momper_2013 | not_relevant | 0 | 0 | The paper investigates the impact of renal function (eGFR) and probenecid on cidofovir pharmacokinetics, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mueller_2003 | irrelevant | 0 | 0 | The paper focuses on ganciclovir efficacy and in-vitro susceptibility of viruses, mentioning cidofovir only as a comparator with no pharmacokinetic data. |
| PGx | Mueller_2003 | not_relevant | 0 | 0 | The paper studies ganciclovir efficacy and in vitro susceptibility of viruses, containing no data on cidofovir pharmacogenomics or PK/PD parameters. |
| PGx | Neant_2018 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics and efficacy/safety outcomes based on AUC, but does not report any pharmacogenomic (gene variant/genotype/phenotype) effect on a PK or PD parameter. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | The study reports in vitro antiviral drug susceptibility (EC50 values) for cidofovir against HHV-8, not pharmacokinetic parameters. |
| PGx | Neyts_1997 | not_relevant | 0 | 0 | The paper reports antiviral susceptibility (EC50) of HHV-8 to cidofovir in vitro, but does not investigate human gene variants or pharmacogenomic effects on PK or PD parameters. |
| popPK | Ng_2017 | irrelevant | 0 | 0 | The paper is a review of leflunomide/teriflunomide pharmacokinetics and contains no data for cidofovir. |
| PGx | Ng_2017 | not_relevant | 0 | 0 | The paper discusses leflunomide, not cidofovir, and focuses on clinical monitoring of its active metabolite teriflunomide. |
| popPK | Olson_2014 | irrelevant | 0 | 0 | The paper reports in vitro efficacy (EC50) data, not pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Olson_2014 | not_relevant | 0 | 0 | The paper reports in vitro efficacy of brincidofovir against variola virus, but does not investigate any pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Orlando_2002 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for treating genital warts and reports no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Orlando_2002 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of cidofovir treatment regimens for genital warts and does not report any pharmacogenomic effects or changes in PK/PD parameters based on gene variants. |
| popPK | Patil_2017 | irrelevant | 0 | 0 | This is an in vitro antiviral screening study where cidofovir is used only as a positive control; no pharmacokinetic parameters are reported. |
| PGx | Patil_2017 | not_relevant | 0 | 0 | The paper reports in vitro antiviral screening of novel compounds and compares their potency to cidofovir, but it does not report any pharmacogenomic effects on cidofovir's PK or PD parameters. |
| popPK | Polso_2014 | irrelevant | 2 | 0 | This is a comprehensive literature review that mentions cidofovir as one of many weight-based antimicrobials, but it does not report original quantitative PK parameters (CL, V, etc.) for cidofovir in the provided text. |
| PGx | Polso_2014 | not_relevant | 0 | 0 | The paper reviews the impact of obesity on pharmacokinetics, which is a phenotypic factor, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Pérez_1997 | irrelevant | 0 | 0 | The paper is a review of antiviral resistance mechanisms and does not contain any pharmacokinetic data or quantitative disposition parameters for cidofovir. |
| PGx | Pérez_1997 | not_relevant | 0 | 0 | The paper discusses viral resistance mutations (UL97, DNA pol) rather than human pharmacogenomic variants affecting cidofovir PK or PD. |
| popPK | Quenelle_2007 | irrelevant | 0 | 0 | This is an antiviral efficacy study in mice where cidofovir is used only as an in vitro comparator (EC50 values), with no pharmacokinetic disposition parameters reported for cidofovir. |
| PGx | Quenelle_2007 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity and animal efficacy but does not mention any gene variants or pharmacogenomic effects on cidofovir PK/PD. |
| popPK | Richardson_2021 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of brincidofovir (an analog) in three patients and does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for cidofovir. |
| PGx | Richardson_2021 | not_relevant | 0 | 0 | The paper is a pilot clinical study evaluating the efficacy of brincidofovir on HPV disease, with no investigation into pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Romanowski_2021 | irrelevant | 0 | 0 | In vitro EC50 antiviral potency study; cidofovir is only a positive control, no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Romanowski_2021_2 | irrelevant | 0 | 0 | This is an antiviral efficacy study of filociclovir with cidofovir only as a comparator; no PK parameters (CL, V, half-life, model) for cidofovir are reported. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | This is a population PK study of maribavir; cidofovir is only mentioned as a prior failed therapy, with no cidofovir PK parameters. |
| popPK | Tollefson_2022 | irrelevant | 0 | 0 | The study is an in-vitro virology paper comparing the potency of antivirals against HAdV-F41, with cidofovir serving only as a comparator and no pharmacokinetic parameters reported. |
| PGx | Tollefson_2022 | not_relevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50) of filociclovir compared to cidofovir, but contains no pharmacogenomic data or human PK/PD parameter modulation by genetic variants. |
| popPK | Vogel_2002 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of EDDS, with cidofovir serving only as a comparator for resistance, and no PK parameters are reported. |
| PGx | Vogel_2002 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of a different drug (EDDS) against cytomegalovirus and contains no pharmacogenomic or PK/PD data for cidofovir. |
| popPK | Wyles_2005 | irrelevant | 0 | 0 | The paper reports in vitro antiviral susceptibility (IC50) and viral resistance mechanisms, not pharmacokinetic disposition parameters for cidofovir. |
| PGx | Wyles_2005 | not_relevant | 0 | 0 | The paper discusses viral mutations causing drug resistance (microbial pharmacogenomics), not human gene variants affecting cidofovir pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The study focuses on in-vitro cellular cytotoxicity and intracellular concentrations in HEK293 cells, not pharmacokinetic parameters like clearance or volume. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper examines transporter-mediated cellular uptake and cytotoxicity in in vitro cell lines but does not report a pharmacogenomic effect of a specific human gene variant on a PK or PD parameter of cidofovir. |
| popPK | Zhang_2025 | irrelevant | 3 | 2 | This is an antiviral efficacy/drug-discovery study of BCV/HPMPA prodrugs; PK data (Fig. 1d–g, supplementary Fig. 5) are concentration-time profiles in figures not provided, with no numeric CL/V/half-life values in the evidence. |
| PGx | von_2023 | not_relevant | 2 | 3 | Paper describes an NGS assay for detecting CMV resistance mutations (viral genomics), not a host pharmacogenomic effect on cidofovir PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcidofovir%5D&body=Drug%3A%20cidofovir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cidofovir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:00 UTC</sub>
