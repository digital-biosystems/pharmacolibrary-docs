<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Perphenazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Perphenazine_Eggert1976_reference&quot;,&quot;label&quot;:&quot;Eggert_1976_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_perphenazine/Perphenazine_Eggert1976_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perphenazine_Jin2010_reference&quot;,&quot;label&quot;:&quot;Jin_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_perphenazine/Perphenazine_Jin2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Perphenazine

- **generic name:** Perphenazine
- **T3DB:** [T3D2913](http://www.t3db.ca/toxins/T3D2913) · **DrugBank:** [DB00850](https://go.drugbank.com/drugs/DB00850) · **PubChem:** [CID 4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748)
- **groups:** approved, investigational

## About

An antipsychotic phenothiazine derivative with actions and uses similar to those of chlorpromazine. [PubChem]

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** absolute bioavailability is 40% following oral administration.
- **Sources and uses:** For use in the management of the manifestations of psychotic disorders and for the control of severe nausea and vomiting in adults.
- **Mechanism of toxicity:** Binds to the dopamine D1 and dopamine D2 receptors and inhibits their activity. The mechanism of the anti-emetic effect is due predominantly to blockage of the dopamine D2 neurotransmitter receptors in the chemoreceptor trigger zone and vomiting centre. …
- **Acute toxicity:** LD50:318 mg/kg (Oral, Rat)
LD50: 64 mg/kg (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2913">T3DB T3D2913</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 58-39-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8028">ChEBI 8028</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perphenazine | parent | 403.969 | C21H26ClN3OS | PubChem | [4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748) | Eggert_1976, Jin_2010, Wang_2013 |

## Start here

> **Eggert_1976_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> schizophrenic patients and healthy volunteers, n = 22. [Run it in the simulator](drugs/toxin_perphenazine/Perphenazine_Eggert1976_reference.md?tab=Simulation) · [record](drugs/toxin_perphenazine/Perphenazine_Eggert1976_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Eggert_1976_reference](drugs/toxin_perphenazine/Perphenazine_Eggert1976_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Eggert Hansen C et al., Clinical pharmacokinetic studies of per…, British journal of clinical… (1976) | [10.1111/j.1365-2125.1976.tb00647.x](https://doi.org/10.1111/j.1365-2125.1976.tb00647.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Jin_2010_reference](drugs/toxin_perphenazine/Perphenazine_Jin2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dahl-Puustinen_1989_reference](drugs/toxin_perphenazine/Perphenazine_DahlPuustinen1989_reference.md) | — | 1-compartment (no model) | 0 | Dahl-Puustinen ML et al., Disposition of perphenazine is related…, Clinical pharmacology and t… (1989) | [10.1038/clpt.1989.109](https://doi.org/10.1038/clpt.1989.109) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Wang_2013_reference](drugs/toxin_perphenazine/Perphenazine_Wang2013_reference.md) | — | 1-compartment (no model) | 3 | Wang L et al., Pharmacokinetics of orally disintegrati…, Die Pharmazie (2013) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=perphenazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), CYP2C18 (substrate), DRD1 (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 10:32 | 22:22 | 2/2/0 | 0/0/0 | 0/0/0 | 369,492/24,716 | einfracz / qwen3.8-flash-next | 16 | 4/7 | 16/0 | 0 |

## Coverage

- **PubMed hits:** 161 matched, 139 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eggert_1976.pdf` | Eggert Hansen C et al., Clinical pharmacokinetic studies of per…, British journal of clinical… (1976) | popPK | 10 | [10.1111/j.1365-2125.1976.tb00647.x](https://doi.org/10.1111/j.1365-2125.1976.tb00647.x) | [973987](https://pubmed.ncbi.nlm.nih.gov/973987) | The paper reports quantitative toxicokinetic parameters (terminal half-life of ~9.5 hours and systemic clearance rate of ~100 l/h) for perphenazine in human subjects. |
| `Mohammadi_2021.pdf` | Mohammadi P et al., Pharmacokinetics and brain distribution…, Drug development and indust… (2021) | popPK | 10 | [10.1080/03639045.2020.1862172](https://doi.org/10.1080/03639045.2020.1862172) | [33307865](https://pubmed.ncbi.nlm.nih.gov/33307865) | The paper reports quantitative pharmacokinetic parameters (MRT, t1/2, bioavailability) for perphenazine in rats, but the specific numeric values are not included in the provided abstract/evidence text. |
| `Dahl-Puustinen_1989.pdf` | Dahl-Puustinen ML et al., Disposition of perphenazine is related…, Clinical pharmacology and t… (1989) | popPK | 9 | [10.1038/clpt.1989.109](https://doi.org/10.1038/clpt.1989.109) | [2743709](https://pubmed.ncbi.nlm.nih.gov/2743709) | The paper reports quantitative pharmacokinetic parameters (Cmax, AUC) for perphenazine in humans, with numeric values explicitly provided in the text. |
| `Jin_2010.pdf` | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | popPK | 9 | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) | [19843655](https://pubmed.ncbi.nlm.nih.gov/19843655) | The paper reports specific quantitative population pharmacokinetic parameters (clearance and volume of distribution) for perphenazine in humans. |
| `Jerling_1996.pdf` | Jerling M et al., The CYP2D6 genotype predicts the oral c…, Clinical pharmacology and t… (1996) | popPK | 8 | [10.1016/S0009-9236(96)90111-3](https://doi.org/10.1016/S0009-9236(96)90111-3) | [8612387](https://pubmed.ncbi.nlm.nih.gov/8612387) | The study reports that CYP2D6 genotype significantly predicts oral clearance of perphenazine, identifying clearance as the key kinetic parameter, but specific numeric values for clearance (or other parameters) are not provided in the extracted evidence. |

<sub>queue written 2026-11-12 10:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altamura_2003 | irrelevant | 0 | 0 | The paper is a clinical review focusing on adverse effects, efficacy, and switching strategies, without reporting quantitative toxicokinetic parameters for perphenazine. |
| popPK | Balant-Gorgia_1987 | irrelevant | 2 | 1 | The paper is a general review summarizing approximate pharmacokinetic properties of multiple antipsychotics including perphenazine, without reporting specific original quantitative parameter values in the provided text. |
| popPK | Brosen_1990 | irrelevant | 1 | 0 | The paper is a general review of CYP2D6 polymorphism and metabolism where perphenazine is only mentioned as an example substrate without reporting any quantitative kinetic parameters or numerical values for it. |
| PGx | Brosen_1990 | not_relevant | 3 | 0 | The text mentions perphenazine as a substrate for CYP2D6 and notes that phenotyping is clinically useful, but it does not report specific quantitative changes in PK/PD parameters for perphenazine. |
| PGx | Brøsen_1989 | not_relevant | 2 | 0 | The text mentions perphenazine as a substrate affected by the polymorphism but provides no specific data, effect sizes, or quantitative parameters for perphenazine itself. |
| popPK | Bustamante_2019 | irrelevant | 0 | 0 | The paper mentions perphenazine's in vitro EC50 for Leishmania but reports no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for perphenazine itself. |
| popPK | Cai_2017 | irrelevant | 1 | 1 | The paper is an analytical method development for pericyazine, using perphenazine solely as an internal standard with no kinetic parameters reported for it. |
| PGx | Campbell_2008 | not_relevant | 4 | 3 | Reports PD efficacy (PANSS scores/response rates) based on genotype, but does not define specific PK/PD parameters or provide fitted effect sizes on parameters. |
| PGx | DUrso_2018 | not_relevant | 0 | 0 | The paper focuses on aripiprazole-induced atrial fibrillation; perphenazine was only mentioned as a subsequent treatment, with no pharmacogenomic PK/PD data reported. |
| popPK | Dahl_1988 | irrelevant | 1 | 0 | The text is a general overview discussing plasma level monitoring but contains no quantitative toxicokinetic parameters or numeric data for perphenazine. |
| popPK | Dahl_1991 | irrelevant | 3 | 0 | The paper focuses on zuclopenthixol kinetics, mentioning perphenazine only to reference a prior study and note a correlation between clearances without reporting perphenazine's numeric kinetic parameters. |
| popPK | El_2004 | irrelevant | 0 | 0 | The paper focuses on P-gp affinity (IC50) and in-vivo kinetics of amisulpride and fluphenazine, using perphenazine only as a comparator for in-vitro binding without reporting kinetic parameters. |
| popPK | Geffen_2009 | irrelevant | 2 | 0 | The paper focuses on BL-1020, a prodrug of perphenazine, and perphenazine is used primarily as a comparator with no reported kinetic parameters for itself. |
| popPK | Gerebtzoff_2004 | irrelevant | 2 | 8 | The paper reports membrane permeability coefficients and partition coefficients from in vitro surface activity/liposome studies, which are physicochemical properties rather than quantitative in vivo toxicokinetic parameters (like half-life, clearance, or Vd) for perphenazine. |
| PGx | Hamelin_1998 | not_relevant | 0 | 0 | The study investigates in vitro enzyme inhibition kinetics (Ki, Vmax, Km) of CYP2D6 by various drugs, not the effect of human genetic variants on perphenazine PK/PD. |
| PGx | Jerling_1994 | not_relevant | 1 | 0 | The paper describes drug-drug interactions involving perphenazine as a perpetrator affecting nortriptyline/amitriptyline levels, not pharmacogenomic effects on perphenazine's PK/PD. |
| popPK | Jerling_1996 | relevant | 8 | 2 | The study reports that CYP2D6 genotype significantly predicts oral clearance of perphenazine, identifying clearance as the key kinetic parameter, but specific numeric values for clearance (or other parameters) are not provided in the extracted evidence. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper focuses on predicting clinical response using a computational algorithm and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Liang_2020 | not_relevant | 3 | 2 | The paper reports associations between GRM7 variants and clinical treatment response (PD efficacy via PANSS scores), not specific pharmacokinetic or pharmacodynamic parameters (e.g., Cmax, AUC, receptor occupancy) for perphenazine. |
| PGx | Lu_2022 | not_relevant | 3 | 0 | The study is a GWAS analyzing genetic associations with drug-induced QTc prolongation (a PD endpoint), but the statistical model treats "type of antipsychotic" as a covariate and does not report perphenazine-specific pharmacogenomic effect sizes. |
| popPK | Mattheij_1984 | irrelevant | 0 | 0 | The paper discusses prolactin response to suckling in rats, mentioning perphenazine only as an injection tool to stimulate prolactin, with no kinetic parameters for perphenazine itself. |
| PGx | McClay_2011 | not_relevant | 1 | 1 | The study reports genetic associations with clinical efficacy outcomes (PANSS scores) via GWAS, not specific changes to pharmacokinetic parameters (e.g., plasma concentration, clearance) or defined pharmacodynamic parameters directly linked to the gene variant mechanism. |
| PGx | McClay_2011_2 | not_relevant | 0 | 0 | The paper reports a GWAS on neurocognitive outcomes (PD surrogate) rather than specific pharmacokinetic parameters (e.g., AUC, Cmax, Clearance) or direct pharmacodynamic molecular markers for perphenazine; it studies drug response phenotype, not PK/PD parameters. |
| PGx | Micallef_2006 | not_relevant | 1 | 0 | The paper discusses drug-drug interactions (antidepressants inhibiting CYP enzymes affecting perphenazine levels) but does not report the effect of a human gene variant or genotype on perphenazine PK/PD parameters. |
| popPK | Mohammadi_2021 | relevant | 10 | 0 | The paper reports quantitative pharmacokinetic parameters (MRT, t1/2, bioavailability) for perphenazine in rats, but the specific numeric values are not included in the provided abstract/evidence text. |
| PGx | Olesen_2000 | not_relevant | 1 | 0 | The paper reports in vitro enzyme kinetics and isoform contributions to metabolism, but does not report the effect of specific gene variants/genotypes on in vivo PK/PD parameters in humans. |
| PGx | Otręba_2021 | not_relevant | 0 | 0 | The paper reviews in vitro anticancer activity of phenothiazines, not pharmacogenomic effects on perphenazine PK/PD parameters. |
| PGx | Otręba_2022 | not_relevant | 0 | 0 | The paper investigates the effects of perphenazine on protein expression and cell migration in glioblastoma cells in vitro, without analyzing human genetic variants or their impact on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Overo_1977 | irrelevant | 0 | 0 | The paper reports kinetic parameters for nortriptyline (the subject of the interaction study), not for perphenazine. |
| PGx | Ozdemir_1997 | not_relevant | 2 | 0 | The study investigates a drug-drug interaction (phenoconversion via CYP2D6 inhibition by paroxetine) in subjects who are all extensive metabolizers, rather than a genetic polymorphism effect. |
| PGx | Park_2012 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (CYP2D6 inhibition by terbinafine) affecting perphenazine levels, but does not report on the effect of a specific gene variant, genotype, or phenotype on the drug's PK or PD. |
| popPK | Perera_2014 | irrelevant | 2 | 1 | The paper utilizes pre-existing population parameters from other studies to determine optimal sampling strategies and does not report the primary quantitative kinetic parameters (e.g., CL, Vd) for perphenazine directly in the text. |
| PGx | Plaitakis_2011 | not_relevant | 1 | 5 | The paper reports the interaction of perphenazine with the GLUD2 enzyme in vitro, which is a biochemical mechanism, not a pharmacokinetic or pharmacodynamic parameter change in humans caused by a gene variant. |
| popPK | Sahi_2008 | irrelevant | 0 | 0 | Perphenazine is only used as an inhibitor in enzyme kinetics assays and is not the substrate whose kinetics are being characterized. |
| popPK | Schlauersbach_2022 | relevant | 8 | 4 | The paper reports non-compartmental PK parameters (AUC, Tmax) for perphenazine in rats, but specific numeric values for AUC and other parameters are contained in Table 2 which is not provided in the text evidence. |
| popPK | Shibanoki_1987 | irrelevant | 3 | 0 | The paper discusses pharmacokinetics qualitatively (comparing elimination rates) and pharmacodynamics without reporting specific quantitative toxicokinetic parameters for perphenazine. |
| PGx | Shin_1999 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition kinetics (IC50, Ki) of perphenazine on CYP2D6, not a pharmacogenomic effect of a genotype on a PK or PD parameter. |
| popPK | Sinha_1979 | irrelevant | 0 | 0 | Perphenazine is used only as a pharmacological stimulus to induce prolactin release; the paper reports on prolactin kinetics, not perphenazine kinetic parameters. |
| popPK | Spanarello_2014 | irrelevant | 1 | 0 | This is a review article discussing depot antipsychotics in general; perphenazine is mentioned in a list, but no specific numeric kinetic parameters are provided in the text. |
| PGx | Sproule_1997 | not_relevant | 3 | 2 | The text mentions phenotyping in passing and cites studies on drug-drug interactions (CYP2D6 inhibition by SSRIs) affecting perphenazine levels, but does not report specific pharmacogenomic effect sizes of gene variants on perphenazine PK/PD parameters. |
| PGx | Stöllberger_2005 | not_relevant | 1 | 0 | The text mentions perphenazine only in a list of drugs causing QT prolongation and mentions pharmacogenomics as a general risk factor for QT, but provides no specific data on how gene variants affect perphenazine's PK or PD parameters. |
| PGx | Størset_2025 | not_relevant | 2 | 0 | The paper identifies a CYP2D6 poor metabolizer genotype in a patient taking perphenazine but does not report specific pharmacokinetic parameters or quantitative effect sizes for perphenazine; the focus is on solanidine as a phenotyping marker. |
| PGx | Sun_2024 | not_relevant | 1 | 0 | The paper reports PD associations (clinical response scores) for a mixed cohort of multiple antipsychotics, not specific perphenazine PK/PD parameters stratified by gene variant. |
| popPK | Suzuka_1987 | irrelevant | 0 | 0 | The provided evidence contains only metadata about the text extraction software (GROBID) and no scientific content, text, or data regarding perphenazine. |
| PGx | Sweet_2000 | not_relevant | 6 | 3 | The paper mentions CYP2D6 phenotype in the introduction to contextualize EPS findings but provides no data or analysis correlating specific genotypes/phenotypes with PK/PD parameters; the reported correlations are with drug/metabolite concentrations, not genetic status. |
| PGx | Syvälahti_1997 | not_relevant | 2 | 1 | The paper states there were no significant changes in perphenazine plasma concentrations due to citalopram co-administration; it does not report pharmacogenomic (gene variant) effects on PK parameters. |
| PGx | Venkatakrishnan_2000 | not_relevant | 2 | 3 | The paper reviews drug-drug interactions, specifically the inhibition of CYP2D6 by terbinafine affecting perphenazine metabolism, but does not report on the effects of human gene variants or genotypes (pharmacogenomics) on perphenazine PK/PD parameters. |
| popPK | Venkatakrishnan_2005 | irrelevant | 2 | 1 | The paper models paroxetine's inhibition of CYP2D6; perphenazine is merely a victim drug used to validate interaction magnitude predictions, and no specific perphenazine disposition parameters are reported. |
| PGx | Venkatakrishnan_2005 | not_relevant | 0 | 0 | The paper describes drug-drug interaction prediction using mechanistic modeling, not the effect of specific gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (vomiting, side effects), reporting risk ratios but no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Westin_2018 | irrelevant | 2 | 0 | The paper is an epidemiological study of serum concentration changes during pregnancy, reporting only that perphenazine concentrations showed a "trend towards declining" without providing quantitative kinetic parameters like clearance, half-life, or volume of distribution in the text; specific values are in supplementary figures not provided. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper discusses in vitro enzyme inhibition and CYP involvement in metabolism but does not report on the effect of human gene variants/genotypes on pharmacokinetic or pharmacodynamic parameters of perphenazine. |
| popPK | Yoshida_1999 | irrelevant | 0 | 0 | The text is a review summary that mentions perphenazine but provides no quantitative kinetic parameters or numeric data within the extracted evidence. |
| PGx | Yu_2018 | not_relevant | 2 | 0 | The paper reports associations with clinical treatment response (psychiatric symptoms), not specific pharmacokinetic or pharmacodynamic parameters for perphenazine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | Perphenazine is listed only as a concomitant medication/co-exposure variable in a study focused on haloperidol pharmacokinetics; no kinetic parameters for perphenazine are reported. |
| popPK | Zang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for olanzapine, with perphenazine appearing only as a comedication affecting olanzapine clearance. |
| popPK | Zhou_2009 | irrelevant | 2 | 0 | The paper is a review of CYP2D6 polymorphisms that mentions perphenazine only as a substrate in a general discussion of steady-state concentrations and pharmacogenetics, without reporting any specific quantitative kinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperphenazine%5D&body=Drug%3A%20perphenazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_perphenazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 10:22 UTC</sub>
