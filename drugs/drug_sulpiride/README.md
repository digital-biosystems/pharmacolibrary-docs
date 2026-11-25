<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sulpiride

- **generic name:** sulpiride
- **ATC codes:** `N05AL01`
- **DrugBank:** [DB00391](https://go.drugbank.com/drugs/DB00391) · **PubChem:** [CID 5355](https://pubchem.ncbi.nlm.nih.gov/compound/5355)
- **molar mass:** 341.426 g/mol (C15H23N3O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Sulpiride is a benzamide antipsychotic used mainly for psychosis in schizophrenia and major depressive disorder. Sulpiride is used widely in Europe, Asia, and the Americas but is not approved in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422418](https://www.wikidata.org/wiki/Q422418), [Wikipedia](https://en.wikipedia.org/wiki/Sulpiride?oldid=1383537304) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulpiride | parent | 341.426 | C15H23N3O4S | DrugBank | [5355](https://pubchem.ncbi.nlm.nih.gov/compound/5355) | Bressolle_1984, Brès_1991, Chen_1989, Helmy_2013, Wiesel_1980, Yao_2019 |

## Start here

> **Bressolle_1984_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adult males. [Run it in the simulator](drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md?tab=Simulation) · [record](drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="74" stroke="#ddd"/><text x="365.0" y="88" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Bressolle_1984 · CL</text><circle cx="318.0" cy="30.0" r="4" fill="#ef6c00"><title>Bressolle_1984 · CL: 5.388 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Brès_1991 · CL</text><circle cx="344.8" cy="46.0" r="4" fill="#ef6c00"><title>Brès_1991 · CL: 7.668 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Wiesel_1980 · CL</text><circle cx="434.3" cy="62.0" r="4" fill="#ef6c00"><title>Wiesel_1980 · CL: 24.9 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Bressolle_1984_reference](drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Bressolle F et al., Sulpiride pharmacokinetics in humans af…, Journal of pharmaceutical s… (1984) | [10.1002/jps.2600730826](https://doi.org/10.1002/jps.2600730826) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Brès_1991_reference](drugs/drug_sulpiride/Sulpiride_Brs1991_reference.md) | — | 1-compartment (no model) | 7 | Brès J et al., Pharmacokinetics of sulpiride in humans…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600801206](https://doi.org/10.1002/jps.2600801206) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q19 — no SI value to build from</sub> | [Chen_1989_reference](drugs/drug_sulpiride/Sulpiride_Chen1989_reference.md) | — | 1-compartment (no model) | 5 | Chen IJ et al., [Comparative pharmacokinetics of two su…, Gaoxiong yi xue ke xue za z… (1989) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Wiesel_1980_reference](drugs/drug_sulpiride/Sulpiride_Wiesel1980_reference.md) | — | 1-compartment (no model) | 6 | Wiesel FA et al., The pharmacokinetics of intravenous and…, European journal of clinica… (1980) | [10.1007/BF00558453](https://doi.org/10.1007/BF00558453) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Helmy_2013_reference](drugs/drug_sulpiride/Sulpiride_Helmy2013_reference.md) | — | 1-compartment (no model) | 0 | Helmy SA, Therapeutic drug monitoring and pharmac…, Biopharmaceutics & drug dis… (2013) | [10.1002/bdd.1843](https://doi.org/10.1002/bdd.1843) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Yao_2019_reference](drugs/drug_sulpiride/Sulpiride_Yao2019_reference.md) | — | 2-compartment (no model) | 8 | Yao QY et al., Preclinical PK/PD model for the combina…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-019-0251-7](https://doi.org/10.1038/s41401-019-0251-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yao_2019_tumor_volume](drugs/drug_sulpiride/pd_Yao_2019_tumor_volume.md) | tumor volume ← sulpiride · disease-progression model | — | Yao QY et al., Preclinical PK/PD model for the combina…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-019-0251-7](https://doi.org/10.1038/s41401-019-0251-7) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Magoski_1995_synaptic_transmission_from_RPeD1_to_its_follower_cells](drugs/drug_sulpiride/pd_Magoski_1995_synaptic_transmission_from_RPeD1_to_its_followe.md) | synaptic transmission from RPeD1 to its follower cells ← (+/-) sulpiride · direct sigmoid Emax (Hill) effect | — | Magoski NS et al., Dopaminergic transmission between ident…, Journal of neurophysiology (1995) | [10.1152/jn.1995.74.3.1287](https://doi.org/10.1152/jn.1995.74.3.1287) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:45 | 0:05 | 4/2/0 | 1/1/0 | 0/0/0 | 4,918/172 | einfracz / qwen3.8-27b | 8 | 4/4 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 384 matched, 98 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 0  ·  needs review 4  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akazawa_2018 | irrelevant | 0 | 0 | Sulpiride is used only as a non-substrate probe drug in an in-vitro cell model to assess permeability/absorption, not as the subject of a quantitative disposition PK parameter study (no CL, V, or t1/2 reported). |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | The paper uses sulpiride only as a permeability substrate in a cell model validation study and does not report any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Albert_1990 | irrelevant | 0 | 0 | The paper describes receptor binding and functional signaling in cell lines, not the pharmacokinetic disposition parameters of sulpiride. |
| PGx | Albert_1990 | not_relevant | 0 | 0 | The paper describes the functional characterization of a cloned dopamine-D2 receptor in rat cells and reports that sulpiride acts as a competitive antagonist at this receptor, but it does not report any human gene variant or genotype affecting the pharmacokinetics or pharmacodynamics of sulpiride. |
| popPK | Baldi_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine receptor activity in kidney cortex, not a pharmacokinetic study, and sulpiride is used only as a pharmacological antagonist. |
| PGx | Baldi_1988 | not_relevant | 1 | 1 | The study investigates the pharmacodynamic effect of the enantiomers of sulpiride on adenylate cyclase activity in human renal cortex, but it does not report pharmacogenomic effects (gene variant/genotype/phenotype) on pharmacokinetic or pharmacodynamic parameters of sulpiride. |
| popPK | Barry_1987 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice measuring anxiolytic effects, reporting no quantitative pharmacokinetic parameters for sulpiride. |
| PGx | Barry_1987 | not_relevant | 0 | 0 | The paper studies behavioral withdrawal in mice and contains no information on gene variants, genotypes, or pharmacogenomics. |
| popPK | Bobker_1990 | irrelevant | 0 | 0 | This is an in-vitro neurophysiology study examining serotonin receptor mechanisms in guinea-pig brain slices, not a pharmacokinetic study. |
| PGx | Bobker_1990 | not_relevant | 0 | 0 | The paper investigates serotonin-mediated neurophysiology in guinea-pig neurons and does not involve human genetics, pharmacogenomics, or the pharmacokinetics/pharmacodynamics of sulpiride as a drug in a clinical or translational pharmacogenomic context. |
| popPK | Bredberg_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic interaction of sulpiride (as a probe) with apomorphine, reporting concentration-effect relationships for heart rate rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for sulpiride. |
| PGx | Bredberg_1991 | not_relevant | 0 | 0 | The study investigates the interaction between apomorphine and sulpiride in rats but does not report any pharmacogenomic effects (gene variants) on sulpiride's pharmacokinetics or pharmacodynamics. |
| PGx | Bressolle_1984 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetic parameters in healthy subjects but does not investigate or report any association with genetic variants, genotypes, or phenotypes. |
| popPK | Bressolle_1992 | relevant | 9 | 3 | The paper is a primary PK study of sulpiride in humans, but only specific parameters (half-life, residence time, bioavailability) are explicitly reported in the evidence; key disposition parameters like total clearance (CL) and volume (V) are described qualitatively as "similar" or "determined" but their specific numeric values are not present in the text provided. |
| PGx | Bressolle_1992 | not_relevant | 0 | 0 | The paper describes general pharmacokinetic properties of sulpiride without investigating any gene variant or pharmacogenomic effects. |
| PGx | Brès_1991 | not_relevant | 0 | 0 | The paper reports general pharmacokinetic parameters of sulpiride in a mixed population but does not mention any gene variants or genotypes. |
| popPK | Ceci_1999 | irrelevant | 0 | 0 | The paper is an in vitro electrophysiological study investigating the effect of sulpiride on dopamine-induced neuronal activity, not a pharmacokinetic study. |
| PGx | Ceci_1999 | not_relevant | 0 | 0 | The study is an in vitro electrophysiology experiment investigating the effect of sulpiride on dopamine-induced neuronal activity, containing no human genetic data or pharmacogenomic analysis. |
| PGx | Chen_1989 | not_relevant | 0 | 0 | The study compares the pharmacokinetics of two different formulations of sulpiride in healthy volunteers without investigating any genetic variants or pharmacogenomic factors. |
| popPK | Coronas_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dopamine D3 receptor effects on cell proliferation, with no pharmacokinetic parameters for sulpiride. |
| PGx | Coronas_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of dopamine D3 receptors on cell proliferation and does not report any pharmacogenomic effects of genetic variants on the PK or PD of sulpiride. |
| popPK | Costall_1987 | irrelevant | 0 | 0 | The paper describes a behavioral pharmacology study in mice using a two-compartment activity box to assess anxiolytic effects, not a pharmacokinetic study with disposition parameters. |
| PGx | Costall_1987 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of sulpiride in an animal model but does not investigate any genetic variant or genotype. |
| popPK | Creese_1979 | irrelevant | 0 | 0 | This is an in vitro receptor binding study, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Creese_1979 | not_relevant | 0 | 0 | The paper investigates species differences in dopamine receptor binding affinity, not the effect of human genetic variants on sulpiride's pharmacokinetics or pharmacodynamics. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiological investigation of dopamine release in rabbit brain slices, not a pharmacokinetic study, and reports no quantitative disposition parameters for sulpiride. |
| PGx | Cubeddu_1989 | not_relevant | 0 | 0 | The paper investigates the interaction between phorbol esters and D2 receptor pharmacodynamics in an animal model, with no mention of genetic variants or pharmacogenomics. |
| popPK | De_2000 | irrelevant | 0 | 0 | The study is a behavioral and neurochemical investigation of dopamine-acetylcholine interactions in rats, using sulpiride as a mechanistic probe rather than for pharmacokinetic analysis. |
| PGx | De_2000 | not_relevant | 0 | 0 | The study investigates the neurochemical mechanism of sulpiride in rats and does not report any pharmacogenomic effects or human genetic variants. |
| popPK | Dziewczapolski_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of motor behavior in an animal model, and sulpiride is used only as a comparator drug with no PK parameters reported. |
| PGx | Dziewczapolski_1997 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic mechanism of action for clozapine in an animal model and uses sulpiride as a comparator, but it does not investigate the effect of gene variants on sulpiride's PK or PD parameters. |
| popPK | Eglen_1990 | irrelevant | 0 | 0 | The paper is an in vitro pharmacology study characterizing 5-HT receptors in guinea-pig ileum, not a pharmacokinetic study for sulpiride. |
| PGx | Eglen_1990 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptor subtypes in guinea-pig ileum in vitro and mentions sulpiride only as a weak agonist in a rank order; it does not report pharmacogenomic effects (gene variants) on sulpiride PK or PD. |
| popPK | Elswood_1991 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of 5-HT4 receptors in guinea-pig colon, using sulpiride as a non-effect probe, and contains no pharmacokinetic data. |
| PGx | Elswood_1991 | not_relevant | 0 | 0 | The paper characterizes 5-HT4 receptors in guinea-pig tissue and does not report any human pharmacogenomic effects on the PK or PD of sulpiride. |
| popPK | Enjalbert_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on pituitary cells using sulpiride as a receptor antagonist, not a pharmacokinetic study. |
| PGx | Enjalbert_1988 | not_relevant | 0 | 0 | The paper describes general pharmacology of dopamine and sulpiride on pituitary cells in vitro but does not report a pharmacogenomic effect (gene variant influencing PK/PD). |
| popPK | Erwin_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay in mice using radiolabeled sulpiride as a D2 antagonist ligand, not a pharmacokinetic study of sulpiride disposition. |
| PGx | Erwin_1993 | not_relevant | 0 | 0 | The paper studies the genetic differences in cocaine behavioral effects and receptor binding in mice; sulpiride is used only as a radioligand for D2 receptor binding, not as a drug whose PK/PD is being analyzed in humans. |
| popPK | Faggin_1990 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on dopamine release where sulpiride is used only as a receptor antagonist tool compound, not as a subject for PK analysis. |
| PGx | Faggin_1990 | not_relevant | 0 | 0 | The paper investigates neurotensin-induced dopamine release and does not report pharmacogenomic effects on sulpiride's PK or PD parameters. |
| popPK | Floran_1990 | irrelevant | 0 | 0 | The study investigates the neurophysiological mechanism of dopamine receptors on GABA release in rats, using sulpiride as a pharmacological antagonist rather than measuring its pharmacokinetic disposition. |
| PGx | Floran_1990 | not_relevant | 0 | 0 | The paper reports a neurophysiological mechanism involving dopamine receptors and is not a pharmacogenomic study of sulpiride. |
| popPK | Friedman_1992 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine agonists in rat tissue where sulpiride is used only as a diagnostic antagonist, with no pharmacokinetic data reported. |
| PGx | Friedman_1992 | not_relevant | 0 | 0 | The paper studies the pharmacological action of D2 agonists on rat tail arteries; sulpiride is used as a non-genetic antagonist control, and there is no genetic variant or pharmacogenomic data involved. |
| popPK | Fujiwara_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation using sulpiride as a D2-receptor antagonist to probe calcium signaling and neurotransmitter release, not a pharmacokinetic study. |
| PGx | Fujiwara_1987 | not_relevant | 0 | 0 | The paper is a basic science study on D2-receptor mechanisms in guinea-pig brain slices and does not report pharmacogenomic effects on the PK or PD of sulpiride in humans. |
| popPK | Gallagher_1985 | irrelevant | 0 | 0 | The study focuses on a different compound (SK&F 101468) where sulpiride is used only as an antagonist in in-vitro functional assays, with no PK parameters for sulpiride reported. |
| PGx | Gallagher_1985 | not_relevant | 0 | 0 | The paper reports on a prejunctional dopamine receptor agonist (SK&F 101468) and its antagonism by (S)-sulpiride, not on how a gene variant alters the PK/PD of sulpiride itself. |
| popPK | Gifford_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cocaine's effects on acetylcholine release using sulpiride as a dopamine receptor antagonist, containing no pharmacokinetic parameters for sulpiride. |
| PGx | Gifford_1992 | not_relevant | 0 | 0 | The paper studies cocaine's mechanism of action on ACh release using sulpiride as a D2 antagonist, not the pharmacokinetics or pharmacodynamics of sulpiride itself, and involves no genetic variants. |
| popPK | Girard_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of action of nefopam, and sulpiride is used only as a pharmacological tool/antagonist, not as the subject of a pharmacokinetic study. |
| PGx | Girard_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanisms of nefopam using sulpiride as a receptor antagonist probe, not the pharmacogenomics of sulpiride. |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation in opossum kidney cells using sulpiride as a receptor antagonist, not a pharmacokinetic study. |
| PGx | Gomes_2003 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of dopamine receptor action in kidney cells and uses sulpiride only as a tool compound (antagonist), not as the subject of a pharmacokinetic or pharmacodynamic pharmacogenomic study. |
| PGx | Harkitis_2015 | not_relevant | 2 | 3 | Sulpiride is used as a D2 antagonist to alter CYP expression; no gene variant/genotype effect on sulpiride's own PK/PD parameters is reported. |
| popPK | Hazell_2017 | irrelevant | 0 | 0 | This is a systematic review of hERG channel liability and TdP risk, not a pharmacokinetic study reporting sulpiride disposition parameters like clearance or volume. |
| PGx | Hazell_2017 | not_relevant | 0 | 0 | The paper is a systematic review of hERG liability (IC50) and TdP risk for various drugs, including sulpiride, but it does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Helmy_2013 | not_relevant | 0 | 0 | The paper describes the standard pharmacokinetics of sulpiride in healthy volunteers without analyzing any genetic variants or pharmacogenomic factors. |
| PGx | Hernández-Lozano_2021 | not_relevant | 0 | 0 | Sulpiride is used only as a transporter inhibitor pretreatment; the paper studies metoclopramide disposition, not sulpiride PK/PD. |
| popPK | Hoffmann_1984 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology experiment using sulpiride as an antagonist, not a pharmacokinetic study. |
| PGx | Hoffmann_1984 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of bromocriptine and sulpiride on neurotransmitter release in rabbits and does not involve human gene variants or pharmacogenomics. |
| popPK | Hsu_1995 | irrelevant | 0 | 0 | The study investigates the mechanism of dopamine's effect on synaptic transmission in rat neostriatum using sulpiride as a pharmacological antagonist, not the pharmacokinetics of sulpiride. |
| PGx | Hsu_1995 | not_relevant | 0 | 0 | The study investigates the mechanism of dopamine action on synaptic transmission and sulpiride's antagonist effect in a rat model, not the impact of genetic variants on sulpiride pharmacokinetics or pharmacodynamics. |
| popPK | Hsu_1996 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological investigation of dopamine receptors in rat hippocampal slices, where sulpiride is used only as a receptor antagonist probe, and no pharmacokinetic parameters for sulpiride are reported. |
| PGx | Hsu_1996 | not_relevant | 0 | 0 | The paper is a neurophysiological study on dopamine receptors in rat hippocampal slices and does not investigate genetic variants or their effect on the pharmacokinetics or pharmacodynamics of sulpiride in humans or animal models relevant to pharmacogenomics. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | This is a receptor binding study in rat uterus where sulpiride is used only as a non-specific competitor, with no pharmacokinetic parameters reported. |
| PGx | Ichida_1983 | not_relevant | 0 | 0 | The study investigates estradiol-induced changes in serotonin receptor density in rat uterus, not the effect of a gene variant on sulpiride's pharmacokinetics or pharmacodynamics. |
| popPK | Imbs_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of dopamine receptor affinity (pA2) in an isolated rat kidney, not a pharmacokinetic study of sulpiride. |
| PGx | Imbs_1983 | not_relevant | 0 | 0 | The paper characterizes renal dopamine receptor pharmacology and sulpiride's stereoselective antagonism but does not report any pharmacogenomic effects on sulpiride PK or PD parameters. |
| popPK | Itokawa_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor sequestration experiment using [3H]sulpiride as a radioligand, not a pharmacokinetic study of sulpiride disposition. |
| popPK | Keating_2004 | irrelevant | 0 | 0 | The study investigates dopamine receptor pharmacology in locusts using sulpiride as a D2 antagonist, not its pharmacokinetics. |
| PGx | Keating_2004 | not_relevant | 0 | 0 | The study is a pharmacological characterization of insect (locust) salivary glands using sulpiride as a tool compound, containing no human genetic variants or pharmacogenomic data. |
| popPK | Lenhard_1991 | relevant | 8 | 4 | The study reports compartmental PK parameters (CL, V, t1/2) for sulpiride in humans, but specific numeric values for these parameters are not explicitly listed in the text, only derived steady-state concentrations and a comparison of model fits. |
| PGx | Lenhard_1991 | not_relevant | 0 | 0 | The paper is a bioequivalence study of sulpiride preparations in healthy volunteers and does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of a Parkinson's disease model in rats where sulpiride is used as a D2 receptor antagonist for mechanistic assessment, not a pharmacokinetic study. |
| PGx | Lin_2008 | not_relevant | 0 | 0 | The paper uses sulpiride as a pharmacological antagonist to probe D2 receptor involvement in a rotenone-induced Parkinson's model in rats; it does not investigate the effect of any gene variant or genotype on sulpiride's pharmacokinetics or pharmacodynamics. |
| popPK | Lux-Lantos_1991 | irrelevant | 0 | 0 | The study investigates the neuroendocrine mechanism of prolactin secretion where sulpiride is used as a pretreatment agent to raise prolactin levels, not as the subject of pharmacokinetic analysis. |
| PGx | Lux-Lantos_1991 | not_relevant | 0 | 0 | The paper studies the pharmacological interaction between baclofen and sulpiride on prolactin levels in rats, but does not report any effect of a gene variant or genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Maeda_1990 | irrelevant | 0 | 0 | The study is a pharmacological/behavioral investigation of penile erection mechanisms in rats using sulpiride as a challenge agent, with no pharmacokinetic parameters reported. |
| PGx | Maeda_1990 | not_relevant | 0 | 0 | The paper describes a neuropharmacological study on penile erection in rats and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Maeda_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of penile erection mechanisms in rats where sulpiride is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PGx | Maeda_1994 | not_relevant | 0 | 0 | The study is a neurophysiology experiment in rats investigating penile erection and does not involve any human pharmacogenomics of sulpiride. |
| popPK | Magoski_1995 | irrelevant | 0 | 0 | The study investigates dopamine neurophysiology in snails and uses sulpiride only as a pharmacological antagonist to block receptors, reporting an IC50 rather than pharmacokinetic parameters. |
| PGx | Magoski_1995 | not_relevant | 0 | 0 | The paper investigates basic neurophysiology in a mollusk and reports sulpiride pharmacology, but does not report any human pharmacogenomic effect on PK or PD parameters. |
| popPK | Maina_2010 | irrelevant | 0 | 0 | The study uses sulpiride as a pharmacological antagonist to validate a voltammetric assay for dopamine receptors, rather than investigating sulpiride's pharmacokinetics. |
| PGx | Maina_2010 | not_relevant | 0 | 0 | The paper reports a pharmacological assay for dopamine receptors in mice and does not investigate the effect of gene variants on sulpiride pharmacokinetics or pharmacodynamics. |
| popPK | Mazzuco_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological mechanism study of dopexamine in guinea pigs, where sulpiride is used only as a D2 antagonist to characterize receptor involvement, and no pharmacokinetic parameters are reported. |
| PGx | Mazzuco_1999 | not_relevant | 0 | 0 | The study characterizes the pharmacological mechanism of dopexamine in guinea pig pulmonary artery and does not report any genetic variants or pharmacogenomic effects on the PK/PD of sulpiride. |
| popPK | Meschler_2001 | irrelevant | 0 | 0 | Sulpiride is used only as a pharmacological antagonist in a signal transduction study, with no PK parameters reported. |
| PGx | Meschler_2001 | not_relevant | 0 | 0 | The paper studies signal transduction interactions in membrane preparations and does not report pharmacogenomic effects on sulpiride PK or PD parameters. |
| popPK | Mizuno_1986 | relevant | 9 | 1 | The paper describes a pharmacokinetic study of sulpiride in rats using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not provided in the evidence. |
| PGx | Mizuno_1986 | not_relevant | 0 | 0 | The paper reports gastrointestinal absorption in rats and does not mention any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Mohammed_2020 | irrelevant | 0 | 0 | The study is a toxicological investigation of cardiac, renal, and immune effects in rats, and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sulpiride. |
| PGx | Mohammed_2020 | not_relevant | 0 | 0 | The study investigates the therapeutic effect of sulpiride on clozapine-induced toxicity in rats and mentions CYP mRNA expression, but it does not report pharmacogenomic effects of specific gene variants on sulpiride's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mohyeldin_2021 | not_relevant | 0 | 0 | The paper investigates formulation effects (nanolipospheres) on PK/PD, with no mention of gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Morales-Olivas_1984 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of CU 32-085 and bromocriptine, using sulpiride only as an antagonist agent, and reports no pharmacokinetic parameters for sulpiride. |
| PGx | Morales-Olivas_1984 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of a new dopamine agonist (CU 32-085) in rats and does not investigate the impact of genetic variants on sulpiride's PK or PD. |
| popPK | Morgenstern_1983 | irrelevant | 0 | 0 | The study describes a behavioral pharmacology model (locomotor activity) in rats and does not report any quantitative pharmacokinetic parameters for sulpiride. |
| PGx | Morgenstern_1983 | not_relevant | 0 | 0 | The paper discusses pharmacodynamics of antipsychotics in rats but does not involve gene variants or pharmacogenomics. |
| popPK | Niwa_2005 | irrelevant | 0 | 0 | The study is an in-vitro investigation of CYP inhibition by sulpiride and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for sulpiride itself. |
| PGx | Niwa_2005 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of sulpiride on CYP enzyme activities in vitro and does not report any pharmacogenomic effects (gene variants) on sulpiride PK or PD. |
| popPK | Niwa_2024 | irrelevant | 0 | 0 | The paper is a regulatory safety assessment regarding the co-administration of adrenaline and antipsychotics, containing no pharmacokinetic data for sulpiride. |
| PGx | Niwa_2024 | not_relevant | 0 | 0 | The text contains package insert information for aripiprazole and risperidone, not pharmacogenomic data on sulpiride. |
| popPK | Noh_2021 | irrelevant | 4 | 0 | Sulpiride is one of nine compounds in a methodology study in rats, and no specific quantitative PK parameter values for sulpiride are provided in the evidence. |
| PGx | Noh_2021 | not_relevant | 0 | 0 | The paper focuses on a pharmacokinetic method for measuring brain penetration in rats and does not report any gene variants or pharmacogenomic effects. |
| popPK | Patel_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine neurotransmission in mice using sulpiride as a receptor antagonist, not a pharmacokinetic study of sulpiride itself. |
| PGx | Patel_2003 | not_relevant | 0 | 0 | The paper investigates the effect of a VMAT2 gene mutation on dopamine release and does not report how this genotype alters the pharmacokinetic or pharmacodynamic parameters of sulpiride. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of dopamine receptor effects on glutamate release, containing no pharmacokinetic or disposition parameters for sulpiride. |
| PGx | Peris_1988 | not_relevant | 0 | 0 | The study is an in vitro mechanistic investigation of D-2 receptor modulation of glutamate release and does not report any pharmacogenomic effect on sulpiride's PK or PD parameters in humans or animals. |
| popPK | Pich_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment measuring anxiety models in rats, not a pharmacokinetic study, and reports no quantitative disposition parameters for sulpiride. |
| PGx | Pich_1986 | not_relevant | 0 | 0 | The study is an animal pharmacological experiment investigating behavioral effects of sulpiride and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Pinto_1998 | irrelevant | 0 | 0 | The paper studies fencamfamine's effect on Na,K-ATPase in rat striatum, with sulpiride used only as a D2 receptor antagonist to block the effect; no PK parameters for sulpiride are reported. |
| PGx | Pinto_1998 | not_relevant | 0 | 0 | The paper studies the mechanism of action of fencamfamine, using sulpiride only as a receptor antagonist, and does not report a pharmacogenomic effect on sulpiride's PK or PD parameters. |
| popPK | Pruitt_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment assessing the effects of sulpiride as a receptor antagonist on cocaine-induced place preference, not a pharmacokinetic study. |
| PGx | Pruitt_1995 | not_relevant | 0 | 0 | The study investigates the pharmacological effect of sulpiride on cocaine-induced place preference in rats, not the effect of genetic variants on sulpiride's pharmacokinetics or pharmacodynamics. |
| popPK | Rane_1996 | irrelevant | 0 | 0 | This is a mechanistic in vivo study in rats investigating the effects of sulpiride on hepatic cytochrome P-450 enzyme expression and activity, not a pharmacokinetic study reporting disposition parameters for sulpiride. |
| PGx | Rane_1996 | not_relevant | 0 | 1 | The paper studies the effect of sulpiride on rat CYP450 enzymes (drug-induced pharmacokinetic changes in an animal model) rather than how a genetic variant affects sulpiride's PK/PD parameters in humans. |
| popPK | Rao_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study focusing on NMDA and nicotinic receptor interactions, where sulpiride is used only as a D2 antagonist probe, not as a subject of PK analysis. |
| PGx | Rao_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of lobeline and DMPP on acetylcholine release; sulpiride is only mentioned as a non-involvement antagonist, with no pharmacogenomic analysis of sulpiride's PK/PD. |
| popPK | Riese_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on ion transport where sulpiride is used only as a pharmacological tool to characterize receptor subtypes, not a PK study. |
| PGx | Riese_1998 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine's effect on ion transport in NPE cells and uses sulpiride only as a pharmacological tool to determine receptor subtype specificity, rather than reporting a pharmacogenomic effect on sulpiride's PK or PD parameters. |
| popPK | Rietbrock_1995 | relevant | 9 | 0 | The study describes the pharmacokinetic absorption of sulpiride in humans using Weibull functions, but no specific numeric parameter values (ka, CL, V, etc.) are present in the provided evidence. |
| PGx | Rietbrock_1995 | not_relevant | 0 | 0 | The paper focuses on absorption kinetics using Weibull functions in healthy volunteers without any pharmacogenomic analysis. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neurotransmission using sulpiride as a receptor antagonist, not a pharmacokinetic study of sulpiride disposition. |
| PGx | Rump_1995 | not_relevant | 0 | 0 | The study is a pharmacological investigation of receptor modulation in human tissue and does not assess the impact of genetic variants on the pharmacokinetics or pharmacodynamics of sulpiride. |
| popPK | Scarduelli_1985 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (serum prolactin levels) and uses sulpiride only as a comparator agent, with no pharmacokinetic parameters reported. |
| PGx | Scarduelli_1985 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of fenflurame compared to sulpiride, but does not report any pharmacogenomic effects (gene variants) on sulpiride's PK or PD parameters. |
| popPK | Schou_2015 | irrelevant | 3 | 3 | Sulpiride is one of 13 drugs in a PET brain-exposure study in monkeys; only Kp (0.002) and Cmax values are given, compartmental analysis failed for sulpiride, and detailed values are in supplementary tables not provided. |
| popPK | Stein_2012 | irrelevant | 0 | 0 | The paper studies the antidepressant properties of Uliginosin B in mice, using sulpiride only as a pharmacological antagonist tool without reporting any pharmacokinetic parameters for it. |
| PGx | Stein_2012 | not_relevant | 0 | 0 | The study focuses on the antidepressant-like activity of uliginosin B and does not investigate the pharmacokinetics or pharmacodynamics of sulpiride, nor does it mention any genetic variants or genotypes. |
| popPK | Stöllberger_2005 | irrelevant | 0 | 0 | This is a review of QT prolongation effects, not a pharmacokinetic study, and contains no disposition parameters for sulpiride. |
| PGx | Stöllberger_2005 | not_relevant | 2 | 0 | The paper is a general review of QT prolongation by antipsychotics and mentions pharmacogenetic polymorphisms only as a general risk factor, without reporting specific gene-variant effects on the PK or PD of sulpiride. |
| popPK | Takei_2024 | irrelevant | 1 | 0 | Sulpiride is merely mentioned as having a concentration within therapeutic range in a forensic toxicology case, with no PK parameters reported for it. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | The paper reports a case of drug-drug interaction (fluvoxamine, levomepromazine, trihexyphenidyl) and does not investigate any gene variant or pharmacogenomic effect on sulpiride. |
| popPK | Trendelenburg_1994 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of dopamine release in rabbit brain slices using sulpiride as a pharmacological probe, not a pharmacokinetic study of sulpiride disposition. |
| PGx | Trendelenburg_1994 | not_relevant | 0 | 0 | The study is a basic neuroscience investigation of adrenergic modulation of dopamine release in rabbit brain slices and does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of sulpiride in humans or animal models. |
| popPK | Undie_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on dopamine receptor signaling in rat brain slices where sulpiride is used only as a control antagonist, and no pharmacokinetic parameters for sulpiride are reported. |
| PGx | Undie_1990 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of dopamine D1 receptor agonists in rat brain and uses sulpiride only as a negative control antagonist; it does not report any pharmacogenomic effects on sulpiride's PK or PD parameters. |
| popPK | Vieira-Coelho_1998 | irrelevant | 0 | 0 | The study investigates dopamine's effect on rat jejunal electrolyte transport and uses sulpiride only as a non-specific antagonist/probe, reporting no pharmacokinetic parameters. |
| PGx | Vieira-Coelho_1998 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of dopamine on intestinal transport and uses sulpiride only as a control to demonstrate receptor specificity; it does not report any pharmacogenomic effect of gene variants on sulpiride's PK or PD parameters. |
| popPK | Vieira-Coelho_2001 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro, using sulpiride only as a receptor antagonist to probe dopamine effects on sodium transport, not a pharmacokinetic study of sulpiride. |
| PGx | Vieira-Coelho_2001 | not_relevant | 0 | 0 | The study investigates the mechanism of dopamine on sodium transport in intestinal cells and uses S-sulpiride only as a negative control antagonist, rather than assessing pharmacogenomic effects on sulpiride's PK/PD parameters. |
| popPK | Weiss_1985 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of D2 receptors in cultured neurons where sulpiride is used as a pharmacological antagonist, not as a subject drug for PK parameter estimation. |
| PGx | Weiss_1985 | not_relevant | 0 | 0 | This paper describes in vitro receptor pharmacology (D2 antagonism of cAMP formation) and does not report any clinical PK/PD parameter for sulpiride influenced by a genetic variant or genotype. |
| popPK | Werner_1996 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study measuring dopamine receptor coupling to potassium channels in Xenopus oocytes, not a pharmacokinetic study of sulpiride. |
| PGx | Werner_1996 | not_relevant | 0 | 0 | The study examines receptor binding and ion channel currents in oocytes, not the impact of genetic variants on sulpiride pharmacokinetics or pharmacodynamics in humans. |
| PGx | Wiesel_1980 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for sulpiride in healthy volunteers but does not investigate or report any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Yamaguchi_1996 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of dopamine receptor signaling where sulpiride is used as a pharmacological antagonist, not as a subject for pharmacokinetic analysis. |
| PGx | Yamaguchi_1996 | not_relevant | 0 | 0 | The paper studies the pharmacological mechanism of D2 receptors in cell lines and does not report any genetic variants affecting the pharmacokinetics or pharmacodynamics of sulpiride. |
| PGx | Yao_2019 | not_relevant | 0 | 0 | The paper investigates preclinical pharmacokinetics and pharmacodynamics in mice but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine receptors in rat colon where sulpiride is used only as a D2 receptor antagonist tool compound, not a subject of pharmacokinetic analysis. |
| PGx | Zhang_2012 | not_relevant | 0 | 0 | The paper studies dopamine receptor mechanisms in rat colonic motility, with sulpiride used only as a D2 antagonist in an animal model, not as a pharmacogenomic study of the drug itself. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The paper is an electrophysiological study using sulpiride as a pharmacological tool to block D2 receptors, not a study of sulpiride's pharmacokinetics. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper uses sulpiride as a pharmacological tool to block D2 receptors in a cellular assay to study carotid body physiology, not to analyze pharmacogenomic effects on sulpiride's PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulpiride%5D&body=Drug%3A%20sulpiride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulpiride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:44 UTC</sub>
