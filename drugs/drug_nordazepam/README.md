<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;nordazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nordazepam_Klotz1975_reference&quot;,&quot;label&quot;:&quot;Klotz_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nordazepam

- **generic name:** nordazepam
- **ATC codes:** `N05BA16`
- **DrugBank:** [DB14028](https://go.drugbank.com/drugs/DB14028) · **PubChem:** none
- **molar mass:** 270.714 g/mol (C15H11ClN2O) — DrugBank
- **groups:** investigational

## About

Nordazepam is a benzodiazepine derivative used primarily to treat anxiety disorders. It is administered orally in tablet or pill forms. The drug is classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3180288](https://www.wikidata.org/wiki/Q3180288), [Wikipedia](https://en.wikipedia.org/wiki/Nordazepam?oldid=1381013413) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desmethyldiazepam | parent | 270.714 | C15H11ClN2O | DrugBank | — | Wilensky_1978 |
| nordazepam | parent | — (mass units only) | C15H11ClN2O | — | — | — |
| clorazepate | metabolite | 314.725 | C16H11ClN2O3 | PubChem | [2809](https://pubchem.ncbi.nlm.nih.gov/compound/2809) | Wilensky_1978 |
| desmethyldiazepam (nordazepam) | metabolite | 270.716 | C15H11ClN2O | PubChem | [2997](https://pubchem.ncbi.nlm.nih.gov/compound/2997) | Löscher_1981 |
| diazepam | metabolite | 284.743 | C16H13ClN2O | PubChem | [3016](https://pubchem.ncbi.nlm.nih.gov/compound/3016) | Löscher_1981 |

## Start here

> **Klotz_1975_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md?tab=Simulation) · [record](drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Klotz_1975_reference](drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Klotz U et al., The effects of age and liver disease on…, The Journal of clinical inv… (1975) | [10.1172/JCI107938](https://doi.org/10.1172/JCI107938) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Wilensky_1978_reference](drugs/drug_nordazepam/Nordazepam_Wilensky1978_reference.md) | held back | 1-compartment, oral | 4 | Wilensky AJ et al., Clorazepate kinetics in treated epilept…, Clinical pharmacology and t… (1978) | [10.1002/cpt197824122](https://doi.org/10.1002/cpt197824122) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Bertler_1983_reference](drugs/drug_nordazepam/Nordazepam_Bertler1983_reference.md) | — | general linear (no model) | 2 | Bertler A et al., Pharmacokinetics of chlorazepate after…, Psychopharmacology (1983) | [10.1007/BF00436160](https://doi.org/10.1007/BF00436160) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Löscher_1981_reference](drugs/drug_nordazepam/Nordazepam_Lscher1981_reference.md) | — | general linear (no model) | 3 | Löscher W et al., Pharmacokinetics of diazepam in the dog, Archives internationales de… (1981) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wang_2020_2_reference](drugs/drug_nordazepam/Nordazepam_Wang2020v2_reference.md) | — | parent + metabolite (no model) | 0 | Wang LL et al., An Experimental Pharmacokinetics Study…, Journal of analytical toxic… (2020) | [10.1093/jat/bkz101](https://doi.org/10.1093/jat/bkz101) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:36 | 0:04 | 2/3/0 | 0/0/0 | 0/0/0 | 4,026/171 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 77 matched, 74 returned
- **screened:** 8  ·  **relevant:** 2
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acikgöz_2009 | irrelevant | 1 | 0 | The study is an in-vitro investigation of diazepam metabolism in human hepatocytes, not a clinical pharmacokinetic study of nordazepam, and no quantitative in-vivo PK parameters for nordazepam are reported. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | The paper studies diazepam metabolism in hepatocytes and does not mention nordazepam or any gene variants/genotypes. |
| popPK | Acikgöz_2012 | irrelevant | 2 | 2 | In vitro hepatocyte biotransformation study of diazepam; nordazepam (desmethyldiazepam) is only a measured metabolite with concentration data in figures, no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Andersson_1994 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of diazepam metabolism by microsomes and does not report population pharmacokinetic parameters (CL, V, etc.) for nordazepam in vivo. |
| PGx | Andersson_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of the parent drug diazepam to form metabolites, not the pharmacokinetics or pharmacodynamics of nordazepam (the metabolite) itself, nor does it report genotype-specific effects on nordazepam parameters. |
| popPK | Anzenbacherova_2015 | irrelevant | 0 | 0 | The study focuses on in-vitro CYP inhibition by rocuronium and only briefly mentions nordiazepam as a diagnostic probe metabolite, providing no pharmacokinetic parameters for nordazepam itself. |
| PGx | Anzenbacherova_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (rocuronium inhibiting CYPs), not pharmacogenomic effects of genetic variants on PK/PD. |
| popPK | Arendt_1983 | relevant | 8 | 0 | The study reports PK parameters (Vd, half-life) for desmethyldiazepam (nordazepam) in cats, but the specific numeric values are not present in the provided abstract text. |
| PGx | Arendt_1983 | not_relevant | 0 | 0 | The study focuses on physicochemical properties of benzodiazepines in a cat model and does not investigate pharmacogenomic variants or their effects on PK/PD. |
| popPK | Bertler_1983 | irrelevant | 5 | 3 | The paper reports PK parameters for chlorazepate and desmethyldiazepam (DMD), which is a common metabolite of diazepam/chlordiazepoxide but distinct from nordazepam (alpha-hydroxydiazepam). |
| PGx | Bertler_1983 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of chlorazepate and its metabolite desmethyldiazepam, with no focus on nordazepam or any pharmacogenomic/genetic influence. |
| popPK | Caraco_1995 | irrelevant | 2 | 0 | The study focuses on diazepam and its metabolite desmethyldiazepam, using diazepam as a probe for CYP2C19 activity rather than modeling nordazepam's own pharmacokinetics. |
| PGx | Caraco_1995 | not_relevant | 0 | 0 | The paper studies the drug interaction between omeprazole and diazepam/desmethyldiazepam across ethnicities, not the pharmacogenomics of nordazepam. |
| popPK | Ciraulo_1997 | irrelevant | 4 | 0 | The study focuses on pharmacodynamics and compares groups rather than providing a specific population pharmacokinetic model or detailed parameter values (CL, V) for nordazepam (desmethyldiazepam), with only AUC mentioned in the abstract. |
| PGx | Ciraulo_1997 | not_relevant | 0 | 0 | The paper studies alprazolam, diazepam, and buspirone in alcoholic vs control subjects; it does not report on nordazepam or any pharmacogenomic effects (gene variants). |
| popPK | Crevat-Pisano_1987 | relevant | 6 | 2 | The study reports pharmacokinetic half-lives for diazepam and its active metabolite nordazepam (desmethyldiazepam) in humans, but specific quantitative parameters like clearance or volume are not explicitly listed in the provided text, with concentrations and half-lives being the primary reported values. |
| PGx | Crevat-Pisano_1987 | not_relevant | 0 | 0 | The study focuses on PK monitoring of diazepam and metabolites in tetanus patients without analyzing gene variants or pharmacogenomic effects on nordazepam. |
| popPK | Dasberg_1975 | irrelevant | 0 | 0 | The study focuses on concentration-effect relationships (correlation coefficients) for anxiety reduction rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, half-life) for nordazepam. |
| PGx | Dasberg_1975 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic concentration-effect relationship for diazepam and its metabolite in a general patient population, but does not report any pharmacogenomic effects (e.g., gene variant/genotype differences) on PK or PD parameters. |
| popPK | Elsass_1980 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics and kinetics of diazepam with its metabolite as a co-administered background condition, not on the standalone disposition parameters of nordazepam. |
| PGx | Elsass_1980 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of N-desmethyldiazepam on diazepam in healthy humans but does not report pharmacogenomic effects or genotype-dependent PK/PD variations. |
| popPK | Entholzner_1994 | irrelevant | 0 | 0 | The study investigates electroencephalographic (pharmacodynamic) effects of premedication and does not report pharmacokinetic parameters for nordazepam. |
| PGx | Entholzner_1994 | not_relevant | 0 | 0 | The study evaluates EEG pharmacodynamics of premedication regimens but contains no information on gene variants or genotypes. |
| popPK | Green_2004 | irrelevant | 0 | 0 | This is a general review of body size descriptors in obesity and does not report specific pharmacokinetic parameters for nordazepam. |
| PGx | Green_2004 | not_relevant | 0 | 0 | The paper reviews body size descriptors for PK in obese patients and does not mention nordazepam or any pharmacogenomic effects. |
| popPK | Greenblatt_1991 | irrelevant | 2 | 0 | This is a review article summarizing clinical pharmacokinetics in the elderly; while nordazepam (desmethyldiazepam) is mentioned as an example, no specific quantitative parameter values are provided in the evidence. |
| PGx | Greenblatt_1991 | not_relevant | 0 | 0 | The paper discusses age-related pharmacokinetic and pharmacodynamic changes, not genetic variants or pharmacogenomics. |
| popPK | Hansen_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP enzyme activity in porcine cells and does not report pharmacokinetic disposition parameters (CL, V, etc.) for nordazepam. |
| PGx | Hansen_2000 | not_relevant | 0 | 0 | The paper investigates CYP activity in porcine cell cultures and human recombinant enzymes regarding diazepam metabolism, but does not report pharmacogenomic effects on nordazepam PK/PD parameters. |
| popPK | Hawksworth_1984 | irrelevant | 3 | 0 | The study focuses on beta-blockers as the primary subject, with nordazepam (N-desmethyldiazepam) serving only as a metabolite to illustrate a drug-drug interaction, and no quantitative PK parameter values (CL, V, etc.) for nordazepam are provided in the text. |
| PGx | Hawksworth_1984 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between diazepam and beta-blockers, not the effect of genetic variants on nordazepam pharmacokinetics or pharmacodynamics. |
| PGx | Hua_2025 | not_relevant | 0 | 0 | Effects are due to acacetin (herb-drug interaction), not a gene variant/genotype/phenotype; no pharmacogenomic effect on nordazepam PK/PD. |
| popPK | Iwaya_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of diazepam and the pharmacokinetic profile of the metabolite N-desmethyldiazepam (nordazepam) only qualitatively, without reporting specific quantitative PK parameters like CL, V, or ka in the provided text. |
| PGx | Iwaya_1989 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of diazepam and its metabolite nordazepam, but it does not report any gene variants, genotypes, or pharmacogenomic effects on these parameters. |
| popPK | Jones_2007 | irrelevant | 0 | 0 | The paper reports forensic blood concentrations in impaired drivers rather than deriving pharmacokinetic disposition parameters (CL, V, Ka, etc.). |
| PGx | Jones_2007 | not_relevant | 1 | 0 | The paper reports forensic blood concentrations in a general population but does not analyze how specific gene variants affect the PK or PD parameters of nordazepam. |
| popPK | Kenworthy_2001 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of CYP3A4 enzyme kinetics using diazepam and testosterone, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for nordazepam in a biological system. |
| PGx | Kenworthy_2001 | not_relevant | 0 | 0 | The paper investigates multisite kinetic models and drug-drug interactions between diazepam and testosterone in recombinant systems, but does not report pharmacogenomic effects or specific PK/PD changes for nordazepam based on genetic variants. |
| popPK | Klockowski_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of diazepam and its metabolites (including desmethyldiazepam/nordazepam) in rats, rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for nordazepam as the subject drug. |
| PGx | Klockowski_1988 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of diazepam and its metabolites (desmethyldiazepam, oxazepam, temazepam) in rats, but does not report on nordazepam or any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Klockowski_1988_2 | relevant | 7 | 2 | The study reports the pharmacokinetics of desmethyldiazepam (nordazepam) in rats, but specific numeric parameter values are not provided in the text; they are likely in figures or tables not included in the evidence. |
| PGx | Klockowski_1988_2 | not_relevant | 0 | 0 | The paper studies the effect of hypovolemia (a physiological state) on pharmacokinetics, not a genetic variant or genotype. |
| popPK | Klotz_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diazepam (parent drug) and its metabolite desmethyldiazepam, not nordazepam (the active metabolite of chlordiazepoxide). |
| PGx | Klotz_1975 | not_relevant | 0 | 0 | The paper studies the effects of age and liver disease on diazepam pharmacokinetics, not genetic variants (pharmacogenomics), and the specific drug mentioned is diazepam (though nordazepam is its metabolite, no genetic association is reported). |
| popPK | Klotz_1976 | relevant | 8 | 2 | The paper describes the pharmacokinetics of diazepam and its major active metabolite desmethyl-diazepam (nordazepam) using a compartmental model, but the specific quantitative PK parameters for nordazepam are not present in the provided text. |
| PGx | Klotz_1976 | not_relevant | 0 | 0 | The paper compares pharmacokinetics across species but does not investigate gene variants/genotypes/phenotypes affecting PK. |
| popPK | Klotz_1977 | irrelevant | 1 | 1 | The paper focuses on diazepam pharmacokinetics and only mentions desmethyldiazepam (nordazepam) as a metabolite without providing specific numeric parameter values for it. |
| PGx | Klotz_1977 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of diazepam and desmethyldiazepam, not nordazepam, and focuses on physiological factors (age, liver function) rather than genetic variants. |
| popPK | Kosuge_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of diazepam and its interaction with diltiazem; while N-desmethyldiazepam (nordazepam) is mentioned, no quantitative PK parameters for nordazepam are reported as the subject of analysis. |
| popPK | Ku_2018 | irrelevant | 0 | 0 | The paper reports the population pharmacokinetic parameters for diazepam, not its metabolite nordazepam. |
| PGx | Ku_2018 | not_relevant | 0 | 0 | The paper describes the population pharmacokinetics of diazepam in children and does not report any pharmacogenomic effects on nordazepam or any other compound. |
| popPK | Kumana_1987 | irrelevant | 1 | 2 | The study focuses on the pharmacokinetics of diazepam, with nordazepam (desmethyldiazepam) mentioned only as a secondary measured metabolite without specific quantitative parameter reporting as the subject drug. |
| PGx | Kumana_1987 | not_relevant | 0 | 0 | The study reports PK differences for diazepam based on ethnicity and body composition, not a pharmacogenomic effect on nordazepam. |
| popPK | Luurila_1996 | irrelevant | 1 | 0 | The study focuses on the parent drugs diazepam and flunitrazepam, with nordazepam (N-desmethyldiazepam) only mentioned as a metabolite without reporting quantitative PK parameters for it as the primary subject. |
| PGx | Luurila_1996 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (erythromycin) on diazepam and flunitrazepam, and does not report pharmacogenomic effects on nordazepam. |
| popPK | Löscher_1981 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for diazepam and its metabolite desmethyldiazepam (nordazepam) as secondary observations rather than the subject drug, with limited quantitative parameter reporting for nordazepam itself. |
| PGx | Löscher_1981 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of diazepam in dogs and does not report on nordazepam or any pharmacogenomic effects. |
| popPK | Maksay_1991 | irrelevant | 0 | 0 | The paper is an in-vitro study investigating receptor binding and efficacy of benzodiazepine derivatives, not a pharmacokinetic study reporting disposition parameters for nordazepam. |
| PGx | Maksay_1991 | not_relevant | 0 | 0 | The paper investigates in vitro binding kinetics and stereoselectivity of benzodiazepine derivatives, containing no data on nordazepam pharmacokinetics or pharmacogenomic variants. |
| popPK | Mian_2024 | irrelevant | 0 | 0 | The paper focuses on the development of antischistosomal benzodiazepines (meclonazepam analogs) in mice and does not report pharmacokinetic parameters for nordazepam. |
| PGx | Mian_2024 | not_relevant | 0 | 0 | The paper discusses the development of meclonazepam analogs for antiparasitic activity and does not investigate pharmacogenomic effects on the PK/PD of nordazepam. |
| popPK | Muir_1982 | irrelevant | 2 | 1 | The study reports PK parameters for the parent drug diazepam in horses; while the metabolite N-desmethyldiazepam (nordazepam) is identified qualitatively in urine, no quantitative PK parameters (CL, V, t1/2) for nordazepam are provided. |
| PGx | Muir_1982 | not_relevant | 0 | 0 | The study investigates pharmacokinetics and pharmacodynamics of diazepam in horses and does not report any pharmacogenomic effects or data for nordazepam. |
| popPK | Norman_1997 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for diazepam and its metabolite desmethyldiazepam (nordiazepam) in foals, but does not report specific quantitative disposition parameters (CL, V, Q, ka, t1/2) for nordazepam itself. |
| PGx | Norman_1997 | not_relevant | 0 | 0 | The paper investigates age-related PK changes of diazepam in foals, not the pharmacogenomic effects of nordazepam. |
| popPK | Okiyama_1987 | irrelevant | 0 | 0 | The study investigates the effect of imipramine on diazepam pharmacokinetics in rats, and does not include nordazepam (a distinct drug) as a subject. |
| PGx | Okiyama_1987 | not_relevant | 0 | 0 | The paper studies drug-drug interactions with imipramine, not pharmacogenomic effects on nordazepam. |
| popPK | Pacifici_1983 | relevant | 5 | 2 | The study reports kinetic parameters for pinazepam and its metabolites, including N-desmethyldiazepam (desmazepam), but provides no specific numeric disposition parameters for nordazepam itself. |
| PGx | Pacifici_1983 | not_relevant | 0 | 0 | The paper reports the PK of pinazepam, not nordazepam, and does not investigate genetic variants. |
| popPK | Qin_1999 | irrelevant | 2 | 5 | The study focuses on diazepam pharmacokinetics; nordazepam (desmethyldiazepam) is only reported as a half-life and is not the subject of a dedicated PK parameter estimation (CL, V, Q) for this specific paper's primary objective. |
| PGx | Qin_1999 | not_relevant | 2 | 0 | The paper reports pharmacogenomic effects on the PK parameters of diazepam and its major metabolite desmethyldiazepam, but it does not report data for nordazepam (a secondary metabolite). |
| popPK | Saari_2007 | relevant | 8 | 1 | The study reports quantitative PK parameters for nordazepam (specifically t1/2 and AUC ratios) in the context of a drug interaction, but the specific numeric values for nordazepam are not explicitly listed in the provided text, likely residing in the full results section or tables. |
| PGx | Saari_2007 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (voriconazole/fluconazole) on diazepam, not the effect of a gene variant or genotype on nordazepam. |
| popPK | Sacre_2017 | irrelevant | 0 | 0 | The study focuses on clinical toxicodynetics (time to maximum effect) in overdose cases and does not report quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Sacre_2017 | not_relevant | 0 | 0 | The paper describes toxicodynetics in overdoses but does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| popPK | Scavone_1987 | irrelevant | 1 | 0 | The study focuses on tissue distribution in rats for alprazolam, diazepam, and triazolam, with no mention of nordazepam as a subject drug or measured parameter. |
| PGx | Scavone_1987 | not_relevant | 0 | 0 | The paper studies tissue distribution in rats using benzodiazepines like diazepam and alprazolam, but does not investigate nordazepam or any pharmacogenomic effects. |
| popPK | Sepinwall_1978 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in squirrel monkeys assessing dose-response effects on conflict behavior, with no pharmacokinetic parameter reporting for nordazepam. |
| PGx | Sepinwall_1978 | not_relevant | 0 | 0 | The study describes dose-response profiles in animals and contains no data on genetic variants or pharmacogenomic influences. |
| popPK | Shader_1984 | irrelevant | 2 | 1 | The study focuses on the kinetics of prazepam, clorazepate, and diazepam, using desmethyldiazepam (nordazepam) only as a secondary metabolite/comparator in pharmacodynamic comparisons, and no quantitative PK parameter values for nordazepam are provided in the evidence. |
| PGx | Shader_1984 | not_relevant | 0 | 0 | The study compares different benzodiazepine drugs in healthy volunteers and does not report any pharmacogenomic effects or genetic variants associated with nordazepam or any other drug's PK/PD. |
| PGx | Skoda_2020 | not_relevant | 2 | 3 | Study examines CAR activation by diazepam/nordazepam in vitro; no gene variant/genotype effect on nordazepam PK or PD parameters is reported. |
| popPK | Swift_1985 | irrelevant | 2 | 0 | The study focuses on diazepam pharmacodynamics and concentrations; while it mentions desmethyldiazepam (nordazepam) concentrations did not differ, it does not report specific quantitative PK parameters (CL, V, etc.) for nordazepam as the subject drug. |
| PGx | Swift_1985 | not_relevant | 0 | 0 | The paper studies the effects of aging on diazepam, not genetic variants, and does not mention nordazepam. |
| popPK | Troy_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of diazepam and venlafaxine, with no quantitative data or modeling for nordazepam (the N-desmethyl metabolite of diazepam). |
| PGx | Troy_1995 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between venlafaxine and diazepam, not a pharmacogenomic effect involving nordazepam. |
| popPK | Wan_1996 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for diazepam and desmethyldiazepam (nordiazepam), but the primary focus and most quantitative data center on the parent drug diazepam, with nordazepam serving as a secondary metabolite/comparator rather than the sole subject of a dedicated PK model. |
| PGx | Wan_1996 | not_relevant | 3 | 8 | The paper reports PK effects for diazepam and desmethyldiazepam, not nordazepam. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The paper describes a validation of an analytical method (LC/MS/MS) for measuring drug concentrations in rat CSF and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Wang_2003 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring diazepam and metabolites in rats and does not report any pharmacogenomic effects or data for nordazepam. |
| popPK | Wang_2020 | irrelevant | 2 | 8 | The study reports PK parameters for nordazepam only as a metabolite of the parent drug diazepam, which is the primary subject of the investigation. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of diazepam and nordazepam in a Chinese cohort but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Wang_2020_2 | not_relevant | 0 | 0 | The study reports population pharmacokinetics of diazepam and nordazepam but does not investigate or report any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Wilensky_1978 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for clorazepate and its metabolite desmethyldiazepam (nordiazepam is a metabolite of diazepam, not clorazepate), and does not focus on nordazepam as the subject drug. |
| PGx | Wilensky_1978 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of clorazepate/desmethyldiazepam in epileptics without reporting any pharmacogenomic effects or specifically analyzing nordazepam. |
| popPK | Wretlind_1977 | irrelevant | 5 | 2 | The study reports only mean terminal half-lives for nordazepam and explicitly states that individual compartmental parameters could not be reliably fitted, so quantitative CL/V/Q values are not present in the evidence. |
| PGx | Wretlind_1977 | not_relevant | 0 | 0 | The study reports PK parameters for nordazepam in healthy volunteers but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Yasumori_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diazepam metabolism enzymes, not a pharmacokinetic study of nordazepam disposition. |
| popPK | Yeates_1986 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of desmethyldiazepam (nordazepam), but the evidence provided reports parameters only for desmethyldiazepam itself, not for nordazepam as a metabolite or subject drug in the context of a parent dose. |
| PGx | Yeates_1986 | not_relevant | 0 | 0 | The paper studies desmethyldiazepam pharmacokinetics and sex differences, but does not mention nordazepam or any gene variant/genotype/phenotype affecting PK/PD. |
| popPK | Young_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation assessing potency in rats, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Young_1986 | not_relevant | 0 | 0 | The paper describes the pharmacological potency of diazepam metabolites in rats and contains no information on pharmacogenomics or human gene variants. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (Imperatorin/Diazepam), not the effect of a gene variant or genotype on nordazepam pharmacokinetics. |
| popPK | Zuo_2010 | irrelevant | 5 | 2 | The study analyzes diazepam and its metabolite nordazepam (N-desmethyldiazepam) in humans, but it is a bioequivalence/interaction study for Ginkgo biloba; while it likely contains PK data for nordazepam, the specific quantitative disposition parameters (CL, V, t1/2) for nordazepam are not explicitly listed in the provided evidence, only AUC ratios. |
| PGx | Zuo_2010 | not_relevant | 0 | 5 | The study investigates a herb-drug interaction (Ginkgo biloba) on diazepam PK, not the effect of a gene variant/genotype on nordazepam or any other drug. |
| popPK | van_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of desmethyldiazepam (nordazepam) in rats, but it does not report quantitative pharmacokinetic disposition parameters (clearance, volume, half-life) or a compartmental model for the drug. |
| PGx | van_1991 | not_relevant | 2 | 5 | The study investigates pharmacodynamic differences between two rat strains, which is not a pharmacogenomic effect in humans or a specific gene variant, and does not involve nordazepam. |
| popPK | van_1992 | irrelevant | 0 | 0 | The paper is a behavioral and neurochemical study in rats examining benzodiazepine effects on dopamine turnover, and it does not report pharmacokinetic parameters for nordazepam. |
| PGx | van_1992 | not_relevant | 0 | 0 | The paper investigates the neuropharmacological effects of benzodiazepines on dopamine turnover in rats and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters for nordazepam. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnordazepam%5D&body=Drug%3A%20nordazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nordazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:36 UTC</sub>
