<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Pentamidine&quot;}]"></div>

# Pentamidine

- **generic name:** Pentamidine
- **ATC codes:** `P01CX01`
- **DrugBank:** [DB00738](https://go.drugbank.com/drugs/DB00738) · **PubChem:** none
- **groups:** approved, investigational

## About

Pentamidine is a drug used to treat parasitic infections such as leishmaniasis and trypanosomiasis. It is given by intravenous injection, intramuscular injection, or inhalation. It is an approved medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q26841221](https://www.wikidata.org/wiki/Q26841221), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pentamidine | parent | 340.427 | C19H24N4O2 | PubChem | [4735](https://pubchem.ncbi.nlm.nih.gov/compound/4735) | Conte_1991 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Conte_1991_reference](drugs/drug_pentamidine/Pentamidine_Conte1991_reference.md) | — | 1-compartment (no model) | 0 | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Reynolds_1993_IC50](drugs/drug_pentamidine/pd_Reynolds_1993_IC50.md) | [3H]dizocilpine binding to rat brain membranes biomarker turnover ← pentamidine | — | Reynolds IJ et al., Studies on the effects of several penta…, European journal of pharmac… (1993) | [10.1016/0922-4106(93)90023-3](https://doi.org/10.1016/0922-4106(93)90023-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thao_2014_T_brucei_growth_inhibition](drugs/drug_pentamidine/pd_Thao_2014_T_brucei_growth_inhibition.md) | T. brucei growth inhibition ← pentamidine · direct sigmoid Emax (Hill) effect | — | Thao NP et al., Secondary metabolites from Vietnamese m…, Molecules (Basel, Switzerla… (2014) | [10.3390/molecules19067869](https://doi.org/10.3390/molecules19067869) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:09 | 0:05 | 0/1/0 | 2/0/0 | 0/0/0 | 5,141/158 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 319 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berger_1993.pdf` | Berger BJ et al., Polyamine and pentamidine metabolism in…, Acta tropica (1993) | pd | 5 | [10.1016/0001-706x(93)90094-r](https://doi.org/10.1016/0001-706x(93)90094-r) | [7902659](https://www.ncbi.nlm.nih.gov/pubmed/7902659) | metadata signals extractable PD data (IC50) |
| `Aréchiga-Figueroa_2017.pdf` | Aréchiga-Figueroa IA et al., High-potency block of Kir4.1 channels b…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejphar.2017.10.009](https://doi.org/10.1016/j.ejphar.2017.10.009) | [28993158](https://www.ncbi.nlm.nih.gov/pubmed/28993158) | metadata signals extractable PD data (IC50) |
| `Dron_2020.pdf` | Dron MY et al., Mechanisms of NMDA receptor inhibition…, The European journal of neu… (2020) | pd | 4 | [10.1111/ejn.14589](https://doi.org/10.1111/ejn.14589) | [31605636](https://www.ncbi.nlm.nih.gov/pubmed/31605636) | metadata signals extractable PD data (IC50) |
| `Reguera_1994.pdf` | Reguera R et al., Putrescine uptake inhibition by aromati…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90316-6](https://doi.org/10.1016/0006-2952(94)90316-6) | [8204103](https://www.ncbi.nlm.nih.gov/pubmed/8204103) | metadata signals extractable PD data (EC50) |
| `Afrin_2011.pdf` | Afrin LB et al., Value of preemptive CYP2C19 genotyping…, Clinical transplantation (2011) | pgx | 8 | [10.1111/j.1399-0012.2011.01399.x](https://doi.org/10.1111/j.1399-0012.2011.01399.x) | [21299635](https://www.ncbi.nlm.nih.gov/pubmed/21299635) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Koon_2023.pdf` | Koon A et al., Evaluation of pentamidine tolerability…, Pharmacogenomics (2023) | pgx | 5 | [10.2217/pgs-2023-0093](https://doi.org/10.2217/pgs-2023-0093) | [37846549](https://www.ncbi.nlm.nih.gov/pubmed/37846549) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-11-24 02:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afrin_2011 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Ameen_2007 | irrelevant | 0 | 0 | This is a review of therapeutic strategies for cutaneous leishmaniasis and does not report any quantitative pharmacokinetic parameters for pentamidine. |
| PGx | Ameen_2007 | not_relevant | 0 | 0 | The paper is a general review of therapeutic strategies for cutaneous leishmaniasis and does not report specific pharmacogenomic effects on the PK/PD parameters of pentamidine. |
| popPK | Artymowicz_1993 | irrelevant | 0 | 0 | The paper is a review of atovaquone's pharmacokinetics and uses pentamidine only as a comparator in clinical efficacy trials, reporting no PK parameters for pentamidine. |
| PGx | Artymowicz_1993 | not_relevant | 0 | 0 | The paper is a review of atovaquone and does not report any pharmacogenomic effects on the PK or PD of pentamidine. |
| popPK | Aviles_2000 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic (PD) parameters (EC50, Emax) rather than pharmacokinetic (PK) parameters (CL, V, t1/2) for pentamidine. |
| PGx | Aviles_2000 | not_relevant | 0 | 0 | The paper compares the in vitro and in vivo activities of sordarin derivatives against pentamidine but does not report any pharmacogenomic effects (gene variants) on pentamidine's PK or PD parameters. |
| popPK | Bell_1991 | irrelevant | 0 | 0 | The paper reports in vitro structure-activity relationships and DNA-binding affinity, not in vivo pharmacokinetic parameters. |
| PGx | Bell_1991 | not_relevant | 0 | 0 | The paper investigates structure-activity relationships and in vitro antigiardial activity of pentamidine analogs against Giardia lamblia, containing no human pharmacogenomic or PK/PD data. |
| popPK | Berger_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and resistance of pentamidine in trypanosomes and in vitro metabolism, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, half-life) for the drug. |
| PGx | Berger_1993 | not_relevant | 0 | 0 | The paper investigates pentamidine resistance and metabolism in trypanosomes, not human pharmacogenomic variants affecting PK/PD. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy screening study (RECOVER deep learning model) with no pharmacokinetic parameters for pentamidine or any drug. |
| popPK | Bürenheide_2008 | irrelevant | 0 | 0 | The study is an in vitro investigation of CYP450 enzyme inhibition and does not report any pharmacokinetic disposition parameters (CL, V, t1/2) for pentamidine. |
| PGx | Bürenheide_2008 | not_relevant | 0 | 0 | The paper studies the in vitro CYP450 inhibitory potential of pentamidine and its prodrug, but does not report on any pharmacogenomic effects (gene variants/genotypes) on the PK or PD parameters of pentamidine. |
| popPK | Changtam_2010 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study reporting EC50 values for curcuminoids, with pentamidine used only as a comparator control, not a pharmacokinetic study. |
| PGx | Changtam_2010 | not_relevant | 0 | 0 | The paper investigates the antiparasitic activity of curcuminoid analogs against Trypanosoma and Leishmania species, using pentamidine only as a control drug; it does not report pharmacogenomic effects on pentamidine's PK or PD parameters. |
| popPK | Clement_2003 | irrelevant | 0 | 0 | The study focuses on the in vitro biotransformation of ximelagatran/melagatran, with pentamidine mentioned only as a historical example for the prodrug development. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper discusses in vitro metabolism of ximelagatran and mentions pentamidine as a conceptual background for the prodrug design, but it does not report any genetic variation or pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of pentamidine. |
| PGx | Conte_1991 | not_relevant | 0 | 0 | The paper investigates the impact of renal function and hemodialysis on pentamidine PK, but reports no pharmacogenomic effects (gene variants/genotypes). |
| popPK | Cox_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pentamidine as a platelet antagonist, reporting binding/inhibition constants rather than pharmacokinetic disposition parameters. |
| PGx | Cox_1992 | not_relevant | 0 | 0 | The paper investigates pentamidine's pharmacodynamic activity on platelets across different species but does not report any gene variant, genotype, or pharmacogenomic effect. |
| PGx | Cubeddu_2016 | not_relevant | 2 | 3 | Pentamidine is only mentioned as a hERG trafficking disruptor; no gene variant/genotype effect on its PK or PD parameters is reported. |
| popPK | Dardonville_2015 | irrelevant | 0 | 0 | The paper reports in vitro structure-activity relationship (SAR) data for trypanocides, not pharmacokinetic parameters for pentamidine. |
| PGx | Dardonville_2015 | not_relevant | 0 | 0 | The paper describes structure-activity relationships and transporter mechanisms for trypanocides, but does not report any pharmacogenomic effects (human gene variants) on the PK/PD of pentamidine. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety/AKI knowledge-integration study; pentamidine appears only in a nephrotoxicity drug list, with no PK parameters reported. |
| popPK | Fülöp_2026 | irrelevant | 0 | 0 | The study focuses on in vitro transporter interactions and in silico modeling of pentamidine analogs, not quantitative population pharmacokinetic parameters. |
| PGx | Fülöp_2026 | not_relevant | 0 | 0 | The study investigates transporter-mediated transport of pentamidine analogs in cell lines but does not report a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| popPK | Gellis_2012 | irrelevant | 0 | 0 | The study is an in-vitro antiprotozoal evaluation where pentamidine serves only as a reference drug, and no pharmacokinetic parameters are reported. |
| PGx | Gellis_2012 | not_relevant | 0 | 0 | The paper reports the synthesis and antiparasitic activity of beta-carbolines, using pentamidine only as a reference drug; it does not report pharmacogenomic effects on pentamidine pharmacokinetics or pharmacodynamics. |
| popPK | Gómez-Pérez_2014 | irrelevant | 0 | 0 | This is a pharmacodynamics/mechanistic study on a bis-pyridinium derivative (VGP-106) against Leishmania, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for pentamidine itself. |
| PGx | Gómez-Pérez_2014 | not_relevant | 0 | 0 | The paper describes the antileishmanial activity of pentamidine analogues, but does not investigate the influence of human gene variants on the pharmacokinetics or pharmacodynamics of pentamidine. |
| popPK | Hu_2013 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo antiprotozoal efficacy of new compounds, using pentamidine only as a reference for DNA affinity; it does not report pharmacokinetic parameters for pentamidine. |
| PGx | Hu_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and antiprotozoal activity of pentamidine analogues in vitro and in animal models, but does not report any human pharmacogenomic effects on PK or PD parameters. |
| popPK | Jabri_2024 | irrelevant | 0 | 0 | The study focuses on the anti-amoebic efficacy and toxicity of nanoconjugates in vitro and does not report any pharmacokinetic parameters for pentamidine. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | The paper investigates the anti-amoebic efficacy of pentamidine and doxycycline using nanotechnology modifications, not the influence of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | The paper reports in-vitro biological activity (trypanocidal/antileishmanial) of plant compounds, with pentamidine used only as a reference drug, and contains no pharmacokinetic data. |
| PGx | Kabran_2015 | not_relevant | 0 | 0 | The paper reports the isolation of bioactive compounds and their in vitro antiparasitic activities, with no discussion of human gene variants or pharmacogenomics. |
| popPK | Kandpal_1995 | irrelevant | 0 | 0 | The study examines arginine transport in Leishmania donovani in vitro, using pentamidine only as an inhibitor, not as a PK subject. |
| PGx | Kandpal_1995 | not_relevant | 0 | 0 | The paper describes the molecular kinetics of arginine transport in Leishmania promastigotes and notes competitive inhibition by pentamidine, but it does not report any pharmacogenomic effects (gene variants) on pentamidine's PK or PD parameters. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis/in vitro screening paper; pentamidine is only mentioned as an example amidine drug, with no PK parameters. |
| popPK | Koon_2023 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PGx | Koon_2023 | not_relevant | 4 | 5 | The study evaluates CYP2C19 phenotypes, which are not the primary metabolic pathway for pentamidine (renally excreted), and typically reports safety/efficacy rather than specific PK parameter shifts attributable to the gene. |
| popPK | Kuryshev_2005 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of pentamidine-induced QT prolongation (hERG trafficking) in cells, not the pharmacokinetic disposition parameters of the drug. |
| PGx | Kuryshev_2005 | not_relevant | 0 | 0 | The study describes the drug's mechanism of action (hERG trafficking inhibition) on cardiac physiology, not the effect of a genetic variant on the drug's PK or PD. |
| popPK | Latifi_2023 | irrelevant | 0 | 0 | The study is an in vitro assay measuring antimicrobial efficacy and cytotoxicity against Acanthamoeba, not pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | The study investigates in vitro efficacy and cytotoxicity of antimicrobial agents, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | In vitro E. coli resistance-evolution study; pentamidine is only one of many drugs tested, with no PK parameters. |
| popPK | Ludewig_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study in yeast focusing on growth inhibition and mitochondrial effects, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ludewig_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of action in yeast cells, not human pharmacogenomics or pharmacokinetics. |
| popPK | McDiarmid_1993 | irrelevant | 0 | 0 | The study is an occupational health assessment of exposure effects in nurses, not a pharmacokinetic study reporting disposition parameters. |
| PGx | McDiarmid_1993 | not_relevant | 0 | 0 | The paper studies occupational exposure and health effects in nurses, with no investigation into genetic variants or genotypes. |
| popPK | Mendonça_2019 | irrelevant | 0 | 0 | In vitro antileishmanial drug-screening study with no PK parameters for pentamidine (only mentioned as standard therapy). |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug interactions with cisapride, not the pharmacogenomics of pentamidine. |
| popPK | Mollineda-Diogo_2025 | irrelevant | 0 | 0 | This is an in vivo efficacy study of indazole derivatives in mice; pentamidine is only mentioned as a comparator drug with no PK parameters reported. |
| popPK | Muhammad_2003 | irrelevant | 0 | 0 | The paper is a pharmacological study of alkaloids from Psychotria klugii, using pentamidine only as an in vitro comparator for antileishmanial activity, with no PK data. |
| PGx | Muhammad_2003 | not_relevant | 0 | 0 | The paper reports in vitro antiparasitic activity of alkaloids from Psychotria klugii and compares their potency to pentamidine, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pentamidine. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | Study protocol for acoziborole in gHAT; pentamidine is only mentioned as standard-of-care comparator, no PK parameters. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | In vitro study of tranylcypromine against Leishmania; pentamidine is only mentioned as a comparator drug, with no PK parameters. |
| popPK | Patrick_2009 | irrelevant | 0 | 0 | The study is a chemical synthesis and in-vitro antiprotozoal activity screen of pentamidine analogues, reporting no pharmacokinetic parameters. |
| PGx | Patrick_2009 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo antiprotozoal activity of pentamidine analogues, but does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Patrick_2013 | irrelevant | 0 | 0 | The study reports in vitro IC50 values for new compounds with pentamidine used only as a comparator, and contains no pharmacokinetic disposition parameters (CL, V, ka, etc.) for pentamidine. |
| PGx | Patrick_2013 | not_relevant | 0 | 0 | The paper is about drug discovery and antiprotozoal activity of new diamidine derivatives, not a pharmacogenomic study on pentamidine PK/PD. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | This is a medicinal-chemistry review of hydrazone anti-leishmanial scaffolds; pentamidine appears only as a reference comparator with no PK parameters reported. |
| popPK | Reguera_1994 | irrelevant | 0 | 0 | The study reports in-vitro kinetic inhibition of putrescine uptake in Leishmania infantum, not pharmacokinetic parameters for pentamidine. |
| PGx | Reguera_1994 | not_relevant | 0 | 10 | The paper studies the interaction of pentamidine with a parasite transport mechanism (putrescine uptake) and does not report any effect of human gene variants or genotypes on pentamidine's PK or PD parameters. |
| popPK | Reynolds_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of NMDA receptor interactions and toxicity in vitro, not a pharmacokinetic study of pentamidine. |
| PGx | Reynolds_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of pentamidine analogues on NMDA receptors in vitro and does not report any genetic or pharmacogenomic influence on the PK/PD of pentamidine. |
| popPK | Ribeiro_2024 | irrelevant | 0 | 0 | The study investigates the antileishmanial activity of letrozole, not the pharmacokinetics of pentamidine. |
| PGx | Ribeiro_2024 | not_relevant | 0 | 0 | The paper investigates the antileishmanial activity of letrozole, not pharmacogenomics or PK/PD parameters of pentamidine. |
| popPK | Taladriz_2012 | irrelevant | 0 | 0 | The paper is an in vitro structure-activity relationship study of new phosphonium salts, where pentamidine is used only as a comparator or mechanism reference, with no PK parameters reported. |
| PGx | Taladriz_2012 | not_relevant | 0 | 0 | The paper reports chemical synthesis and in vitro activity of new compounds against parasites, not a pharmacogenomic effect on pentamidine. |
| popPK | Thao_2014 | irrelevant | 0 | 0 | Pentamidine is only an in-vitro assay positive control (EC50 reported), with no PK/disposition parameters. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | The paper describes in-vitro isolation of drug-resistant Leishmania cell lines and reports no pharmacokinetic parameters for pentamidine. |
| PGx | Ullman_1989 | not_relevant | 0 | 0 | The study investigates drug resistance in Leishmania donovani (the pathogen) to sodium stibogluconate, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pentamidine in a host. |
| popPK | Wong_2009 | irrelevant | 0 | 0 | The study investigates pentamidine resistance mechanisms in Leishmania parasites using in-vitro assays, which is mechanistic/parasitology research, not a pharmacokinetic study of pentamidine in humans or animals. |
| PGx | Wong_2009 | not_relevant | 0 | 0 | The study investigates drug synergism in Leishmania parasites, not human pharmacogenomics. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | Systematic review of plant-derived antileishmanial compounds; pentamidine is not the subject drug and no PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentamidine%5D&body=Drug%3A%20pentamidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pentamidine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:06 UTC</sub>
