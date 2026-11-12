<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Cholic acid&quot;}]"></div>

# Cholic acid

- **generic name:** Cholic acid
- **T3DB:** [T3D4343](http://www.t3db.ca/toxins/T3D4343) · **DrugBank:** [DB02659](https://go.drugbank.com/drugs/DB02659) · **PubChem:** [CID 221493](https://pubchem.ncbi.nlm.nih.gov/compound/221493)
- **groups:** approved, investigational

## About

Cholic acid is a major primary bile acid produced in the liver and usually conjugated with glycine or taurine. It facilitates fat absorption and cholesterol excretion. Bile acids are steroid acids found predominantly in bile of mammals. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of cholic acid are associated with Familial Hypercholanemia.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4343">T3DB T3D4343</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 81-25-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16359">ChEBI 16359</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Cholic acid (cholic_acid) | parent | 408.579 | C24H40O5 | PubChem | [221493](https://pubchem.ncbi.nlm.nih.gov/compound/221493) | Gilmore_1980, Reif_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Gilmore_1980_reference](drugs/toxin_cholic_acid/CholicAcid_Gilmore1980_reference.md) | — | 1-compartment (no model) | 1 | Gilmore IT et al., Plasma clearance of oral and intravenou…, Gut (1980) | [10.1136/gut.21.2.123](https://doi.org/10.1136/gut.21.2.123) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Koopman_1988_reference](drugs/toxin_cholic_acid/CholicAcid_Koopman1988_reference.md) | — | 1-compartment (no model) | 0 | Koopman BJ et al., Determination of cholic acid and chenod…, Clinica chimica acta; inter… (1988) | [10.1016/0009-8981(88)90004-6](https://doi.org/10.1016/0009-8981(88)90004-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Medrzejewski_1990_reference](drugs/toxin_cholic_acid/CholicAcid_Medrzejewski1990_reference.md) | — | 1-compartment (no model) | 0 | Medrzejewski W et al., [Plasma clearance of cholic acid in pat…, Polski tygodnik lekarski (W… (1990) | — |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Reif_2017_reference](drugs/toxin_cholic_acid/CholicAcid_Reif2017_reference.md) | — | retention function (no model) | 2 | Reif R et al., In vivo imaging of systemic transport a…, Archives of toxicology (2017) | [10.1007/s00204-016-1906-5](https://doi.org/10.1007/s00204-016-1906-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cholic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `ABCC2` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `ABCC1` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inducer | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CES1` inhibitor, `SLC10A1` inhibitor/substrate, `SLC22A7` inhibitor, `SLCO1B1` inducer/inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inducer, `ABCC2` inducer, `ABCC4` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer, `ABCB11` inducer/inhibitor/substrate, `ABCC2` inducer, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADH1C (unknown), COX4I1 (unknown), COX5A (unknown), COX5B (unknown), COX6A2 (unknown), COX6B1 (unknown), COX6C (unknown), COX7A1 (unknown), COX7B (unknown), COX7C (unknown), COX8A (unknown), ESRRG (unknown), FABP1 (unknown), FABP6 (unknown), FECH (inhibitor), GPBAR1 (unknown), MT-CO1 (unknown), MT-CO2 (unknown), MT-CO3 (unknown), NR1H4 (unknown), PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 05:00 | 42:50 | 0/4/0 | 0/0/0 | 0/0/0 | 692,935/42,531 | einfracz / qwen3.8-27b | 34 | 3/26 | 34/0 | 0 |

## Coverage

- **PubMed hits:** 226 matched, 163 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bosje_2005.pdf` | Bosje JT et al., Plasma 14C-cholic acid clearance in hea…, The Veterinary record (2005) | popPK | 10 | [10.1136/vr.157.4.109](https://doi.org/10.1136/vr.157.4.109) | [16040943](https://pubmed.ncbi.nlm.nih.gov/16040943) | The paper reports quantitative plasma clearance and rate constants for cholic acid in dogs, but the specific numeric values are not present in the provided text evidence. |
| `Gilmore_1980.pdf` | Gilmore IT et al., Plasma clearance of oral and intravenou…, Gut (1980) | popPK | 10 | [10.1136/gut.21.2.123](https://doi.org/10.1136/gut.21.2.123) | [7380333](https://pubmed.ncbi.nlm.nih.gov/7380333) | The paper reports quantitative plasma clearance values and hepatic extraction ratios for cholic acid in humans. |
| `Medrzejewski_1990.pdf` | Medrzejewski W et al., [Plasma clearance of cholic acid in pat…, Polski tygodnik lekarski (W… (1990) | popPK | 10 |  | [2235721](https://pubmed.ncbi.nlm.nih.gov/2235721) | The paper reports quantitative plasma clearance values for cholic acid in human patients and controls. |
| `Everson_1988.pdf` | Everson GT et al., Contraceptive steroids alter the steady…, Journal of lipid research (1988) | popPK | 9 |  | [3356953](https://pubmed.ncbi.nlm.nih.gov/3356953) | The paper reports quantitative kinetic parameters (percent changes in synthesis and pool) for cholic acid in humans, but does not provide absolute rate constants, half-lives, or partition coefficients. |
| `Koopman_1988.pdf` | Koopman BJ et al., Determination of cholic acid and chenod…, Clinica chimica acta; inter… (1988) | popPK | 9 | [10.1016/0009-8981(88)90004-6](https://doi.org/10.1016/0009-8981(88)90004-6) | [3044647](https://pubmed.ncbi.nlm.nih.gov/3044647) | The paper explicitly reports numeric pool sizes and fractional turnover rates for cholic acid in healthy volunteers. |
| `Rudolph_1993.pdf` | Rudolph G et al., Effect of ursodeoxycholic acid on the k…, Hepatology (Baltimore, Md.) (1993) | popPK | 9 |  | [8514251](https://pubmed.ncbi.nlm.nih.gov/8514251) | The paper reports quantitative kinetic parameters (pool sizes, fractional turnover, synthesis rates) for cholic acid in humans, but the specific numeric values are not present in the provided text. |
| `Quarfordt_1973.pdf` | Quarfordt SH et al., Estimation of cholesterol and bile acid…, The Journal of clinical inv… (1973) | popPK | 8 | [10.1172/JCI107378](https://doi.org/10.1172/JCI107378) | [4719670](https://pubmed.ncbi.nlm.nih.gov/4719670) | The paper reports fractional metabolic rates (turnover) for cholic acid in humans, but specific numeric values for cholic acid are not explicitly listed in the provided evidence snippet. |
| `Stadlbauer_2007.pdf` | Stadlbauer V et al., Removal of bile acids by two different…, ASAIO journal (American Soc… (2007) | popPK | 8 | [10.1097/01.mat.0000249852.71634.6c](https://doi.org/10.1097/01.mat.0000249852.71634.6c) | [17413559](https://pubmed.ncbi.nlm.nih.gov/17413559) | The study reports relative clearance/elimination efficiency of cholic acid in human patients, but specific kinetic rate constants or volumes are not explicitly provided in the text (values likely in figures/tables not fully detailed). |
| `Salvioli_1985.pdf` | Salvioli G et al., Bile acid binding in plasma: the import…, FEBS letters (1985) | popPK | 5 | [10.1016/0014-5793(85)81257-6](https://doi.org/10.1016/0014-5793(85)81257-6) | [4018265](https://pubmed.ncbi.nlm.nih.gov/4018265) | The paper reports on the in vitro distribution and binding of cholic acid to lipoproteins, which constitutes a toxicokinetic parameter (distribution/partitioning), but specific numeric values for these parameters are not present in the provided text. |
| `Zhang_2017.pdf` | Zhang Z et al., Pharmacometabolomics in Endogenous Drug…, Journal of proteome research (2017) | popPK | 5 | [10.1021/acs.jproteome.7b00218](https://doi.org/10.1021/acs.jproteome.7b00218) | [28841024](https://pubmed.ncbi.nlm.nih.gov/28841024) | The paper reports individualized AUC values for d4-cholic acid in rats, which is a kinetic parameter, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-11-10 04:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afifi_1981 | relevant | 8 | 4 | The paper reports on the plasma clearance and biliary excretion of cholic acid in rabbits, providing specific percentage data for biliary excretion (e.g., 44.46% vs 0.7%) and describing the determination of the plasma clearance constant, though specific constant values are likely in tables or figures not fully detailed in the text. |
| PGx | Amjad_2014 | not_relevant | 0 | 0 | The paper describes a cholic acid-based nanocarrier for siRNA delivery and does not investigate pharmacogenomic effects on the PK or PD of cholic acid as a therapeutic agent. |
| PGx | Appadurai_2015 | not_relevant | 0 | 0 | The paper discusses the incidence of Cerebrotendinous Xanthomatosis and CYP27A1 variants but does not report pharmacokinetic or pharmacodynamic parameters for the drug cholic acid. |
| popPK | Bak_2017 | irrelevant | 0 | 0 | The paper focuses on in silico estimation of lipophilicity (log P) and physicochemical properties, not on quantitative toxicokinetic parameters (e.g., clearance, half-life) for cholic acid itself. |
| popPK | Bello_1996 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the drug RP 64477, where cholic acid is used only as a dietary component to induce hypercholesterolemia, not as the subject of kinetic analysis. |
| popPK | Bhattacharjee_2024 | irrelevant | 0 | 0 | The paper is an observational epidemiological study measuring serum concentrations and causal associations in Alzheimer's patients, reporting no kinetic parameters such as clearance, half-life, or rate constants. |
| PGx | Blahová_2016 | not_relevant | 0 | 0 | The study explicitly states that the CYP7A1 -203A/C polymorphism did not significantly affect the response to colesevelam, reporting no pharmacogenomic interaction. |
| PGx | Blazquez_2012 | not_relevant | 2 | 2 | The paper characterizes the role of the ABCG2 transporter in bile acid transport in animal models (rat/mouse), not pharmacogenomic effects of genetic variants on human PK/PD parameters for cholic acid. |
| popPK | Borel_1973 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| popPK | Borel_1973_2 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| popPK | Bosje_2005 | relevant | 10 | 2 | The paper reports quantitative plasma clearance and rate constants for cholic acid in dogs, but the specific numeric values are not present in the provided text evidence. |
| popPK | Bremmelgaard_1983 | relevant | 4 | 3 | The paper reports a pharmacokinetic/liver function test (conjugation and sulfation of cholic acid) and specific quantitative percentages of metabolites (sulfation 0-8.2%) in humans, which constitutes kinetic data for the subject substance, though it focuses on metabolic conversion rather than classical clearance or half-life. |
| PGx | Bárcena_2019 | not_relevant | 0 | 0 | The paper discusses methionine restriction and autophagy in progeria models, with no mention of pharmacogenomics or specific PK/PD parameters of cholic acid. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tectoridin, with cholic acid serving only as a functionalization agent for liposomes, not as the subject substance. |
| PGx | Carazo_2017 | not_relevant | 0 | 0 | The paper studies the effect of chemical modifications (acetylation) on receptor binding, not the effect of a genetic variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Carter_2021 | irrelevant | 0 | 0 | The paper is an exposure/epidemiological study identifying cholic acid as a differentially abundant metabolite in urine, but it reports no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for cholic acid. |
| popPK | Ceryak_1998 | irrelevant | 1 | 0 | The paper focuses on the toxicokinetics and cytotoxicity of lithocholic acid (LCA), with cholic acid only serving as a comparator in uptake studies without specific kinetic parameters (like half-life or clearance) being reported for it. |
| popPK | Chang_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for itraconazole, using cholic acid only as a stabilizer/excipient rather than the subject substance. |
| PGx | Chen_2017 | not_relevant | 3 | 5 | The paper reports on p53-mediated regulation of bile acid disposition in a cholestasis model, which relates to the handling of the compound, but it does not assess the effect of a specific human gene variant on the pharmacokinetics or pharmacodynamics of cholic acid as a drug. |
| PGx | Clayton_2025 | not_relevant | 0 | 0 | The paper reviews clinical treatment outcomes and bile acid metabolism in inborn errors, but does not report pharmacokinetic or pharmacodynamic parameters of cholic acid as a function of specific drug-metabolizing gene variants (pharmacogenomics). |
| PGx | Czuba_2023 | not_relevant | 0 | 0 | The study examines the effect of cholic acid (a substrate/bile acid) on CYP2D6 activity, not how a gene variant or genotype alters the pharmacokinetics or pharmacodynamics of cholic acid. |
| PGx | Dean_2026 | not_relevant | 0 | 0 | The paper investigates a murine hepatocellular carcinoma model involving the FXR gene and cholic acid levels, but it does not report a pharmacokinetic or pharmacodynamic parameter for cholic acid as a drug therapy, nor does it quantify a specific pharmacogenomic effect on a drug response. |
| popPK | Deng_2023 | irrelevant | 1 | 0 | Cholic acid is used only as a conjugating ligand on nanoparticles to facilitate their transport, rather than being the subject substance for which kinetic parameters are measured. |
| PGx | Deo_2008 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the enzyme metabolizing cholic acid but does not report any pharmacogenomic effects of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dhameliya_2023 | irrelevant | 0 | 0 | The paper measures fecal cholic acid excretion as a proxy for probiotic efficacy but does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for cholic acid. |
| popPK | Diamond_1987 | irrelevant | 0 | 0 | The paper is a pathological outcome study on nephrosis where cholic acid is used only as a dietary additive to modulate cholesterol levels, with no toxicokinetic parameters reported. |
| PGx | Drzymała-Czyż_2022 | not_relevant | 0 | 0 | The paper investigates bile acid levels in cystic fibrosis patients as biomarkers for liver disease and does not report on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cholic acid. |
| popPK | Du_2015 | irrelevant | 1 | 0 | Cholic acid appears only as a conjugate component in a delivery vehicle for quercetin; no kinetic parameters are reported for cholic acid itself. |
| popPK | Engelking_1985 | irrelevant | 1 | 0 | The study focuses on the kinetics of indocyanine green (ICG) and sulfobromophthalein (BSP); while cholic acid clearance is mentioned in the background, no quantitative kinetic parameters for cholic acid are reported or present in the evidence. |
| popPK | Everson_1988 | relevant | 9 | 2 | The paper reports quantitative kinetic parameters (percent changes in synthesis and pool) for cholic acid in humans, but does not provide absolute rate constants, half-lives, or partition coefficients. |
| popPK | Fu_2013 | irrelevant | 0 | 0 | The paper reports steady-state concentration levels of bile acids (including cholic acid) in various tissues of mice under different dietary conditions, but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or rate constants for cholic acid. |
| PGx | Fu_2022 | not_relevant | 1 | 8 | The study examines a knockout mouse model (Vps33b deficiency) and its effect on cholic acid-induced toxicity and bile acid metabolism, but it does not assess human genetic variants or polymorphisms for pharmacogenomic purposes. |
| PGx | Furster_1999 | not_relevant | 0 | 0 | The study describes a minor biosynthetic pathway for cholic acid and identifies CYP3A4 as the enzyme, but it does not report pharmacogenomic effects of specific gene variants on the PK or PD of cholic acid as a drug. |
| popPK | Galatola_1991 | relevant | 3 | 2 | The paper measures ileal clearance (absorption efficiency) in humans, which is a kinetic parameter, but for the surrogate SeHCAT rather than direct quantitative kinetic constants (half-life, K, Vd) for cholic acid itself, and values are only mean/range percentages. |
| popPK | Gathercole_2022 | irrelevant | 2 | 0 | The paper measures steady-state bile acid concentrations in knockout mice to study metabolic phenotypes, but does not report kinetic parameters (half-life, clearance rates, partition coefficients) for cholic acid. |
| popPK | Gibson_1995 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of ansamycins (CGP 43371, CGS 24565); cholic acid is mentioned only as part of a dietary regimen for rats and is not the subject substance for which kinetic parameters are reported. |
| PGx | Gnewuch_2009 | not_relevant | 0 | 0 | The paper reports bile acid profiles in IBD patients but does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of cholic acid. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The paper studies albendazole-bile acid conjugates where cholic acid is a conjugating moiety, not the subject of toxicokinetic analysis. |
| PGx | Hanioka_2001 | not_relevant | 0 | 0 | The paper focuses on the glucuronidation kinetics of SN-38 (irinotecan metabolite) and does not report pharmacogenomic effects on cholic acid PK/PD. |
| popPK | Helmke_2024 | irrelevant | 1 | 0 | The paper reports validation of an analytical method (LC-MS/MS) for cholic acid and provides assay performance metrics (accuracy, precision), but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance rate, volume of distribution) for the disposition of cholic acid, although it mentions clearance as a conceptual endpoint of the challenge test. |
| popPK | Hofmann_1983 | relevant | 10 | 2 | The paper presents a physiologically based compartmental model for cholic acid in humans with defined transfer coefficients and clearance values (e.g., first-pass clearance 0.9, constant 0.04 min-1), although specific full parameter sets are often referenced or in tables not fully detailed in the snippet. |
| PGx | Honda_2001 | not_relevant | 0 | 0 | The study focuses on bile acid biosynthesis pathways and CYP3A4 regulation, not on the PK/PD pharmacogenomic effects of cholic acid as a drug. |
| popPK | Huang_2010 | irrelevant | 2 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax) for cholic acid sulfation, but the specific numeric values are not present in the provided text. |
| PGx | Huo_2023 | not_relevant | 0 | 0 | The paper is a nutritional study in fish (Monopterus albus) examining the effects of vitamin A on lipid metabolism and gene expression; it does not involve human pharmacogenomics, drug therapy with cholic acid, or genetic variants affecting cholic acid PK/PD. |
| popPK | Hyogo_2003 | irrelevant | 0 | 0 | The paper studies gallstone formation and cholesterol metabolism in mice, where cholic acid is merely a dietary component of the lithogenic diet, not the subject substance. |
| popPK | Johansson_2018 | irrelevant | 1 | 1 | The study reports relative concentration ratios of bile acids and FGF19 between portal and systemic blood but does not provide quantitative toxicokinetic parameters (e.g., clearance, half-life, rate constants) for cholic acid specifically. |
| popPK | Jäntti_2014 | irrelevant | 2 | 1 | The paper describes an analytical method and reports static concentrations of cholic acid in tissue samples, but does not provide quantitative kinetic parameters such as half-life, clearance, or rate constants. |
| PGx | Kamoto_2016 | not_relevant | 0 | 0 | The paper describes a DNA detection method where cholic acid is used as a structural ligand for an aptamer, not as a drug for which pharmacokinetics or pharmacodynamics are analyzed. |
| popPK | Kaye_1973 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The paper describes mechanisms of hepatic injury and autophagy using cholic acid as a toxicant but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for the disposition of cholic acid. |
| popPK | Kim_2018_2 | irrelevant | 2 | 0 | The paper focuses on the molecular pathogenesis of cholestasis in mice and humans, discussing qualitative changes in bile acid metabolism (enrichment of CA-derived BAs) without reporting quantitative kinetic parameters (half-lives, clearance, rate constants) for cholic acid. |
| popPK | Kołodziejczyk_2014 | irrelevant | 0 | 0 | The paper investigates the surface activity and micellar properties of cholic acid derivatives as surfactants, not the toxicokinetic parameters (half-life, clearance, partition coefficients in tissues) of cholic acid itself in biological systems. |
| PGx | Krueger_2001 | not_relevant | 0 | 0 | The paper characterizes FMO2 enzyme kinetics using cholic acid as a chemical additive to test stability, but does not study the pharmacokinetics or pharmacodynamics of cholic acid itself or the impact of genetic variants on its metabolism. |
| popPK | LaRusso_1978 | irrelevant | 0 | 0 | The abstract describes qualitative relationships between bile acid levels, absorption, and hepatic clearance but does not report specific quantitative kinetic parameters (such as rate constants, half-lives, or volumes of distribution) for cholic acid, and no numeric values are present in the evidence. |
| PGx | Li_2000 | not_relevant | 0 | 0 | The study investigates the induction of UGT expression by bile acids in hepatocytes but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper studies adefovir derivatives conjugated with cholic acid, not cholic acid itself as the subject substance for toxicokinetic parameters. |
| popPK | Li_2019_2 | irrelevant | 0 | 0 | Cholic acid is used solely as a targeting ligand for liposomes, and no kinetic parameters for cholic acid itself are reported. |
| popPK | Liang_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cephalexin and acyclovir, while cholic acid is mentioned only as a bile acid mediator in a mechanistic study of peptide transporter 1 expression, without reporting any kinetic parameters for cholic acid itself. |
| popPK | Lindblad_1976 | irrelevant | 2 | 2 | The study reports bile flow rates and secretion dependencies in humans, but lacks standard toxicokinetic parameters such as half-life, clearance of the substance itself, or tissue partition coefficients. |
| PGx | Little_2022 | not_relevant | 5 | 0 | The study reports associations between receptor null mutations and fecal bile acid profiles, not a pharmacogenomic effect on the PK/PD parameters of cholic acid as a therapeutic agent. |
| popPK | MahmoudianDehkordi_2019 | irrelevant | 0 | 0 | The paper is an epidemiological study associating serum bile acid concentrations (including cholic acid) with Alzheimer's disease diagnosis and cognitive decline, reporting no quantitative toxicokinetic parameters (half-life, clearance, rate constants, etc.). |
| PGx | MahmoudianDehkordi_2019 | not_relevant | 0 | 0 | The study analyzes associations between genetic variants and bile acid profiles in the context of Alzheimer's disease pathogenesis, not the pharmacokinetic or pharmacodynamic modulation of cholic acid as a drug treatment. |
| PGx | Mathur_2020 | not_relevant | 0 | 0 | The paper studies the effects of liver disease states (cholestasis, steatosis) on gene expression and drug metabolism (specifically acetaminophen and zoxazolamine), but does not report pharmacogenomic effects on PK/PD parameters of cholic acid. Cholic acid is only used as a dietary component to induce cholestasis in mice, not as a drug whose PK/PD is being characterized based on genetic variation. |
| popPK | Mendoza_2003 | irrelevant | 0 | 0 | The paper investigates allo-cholic acid (ACA), a stereoisomer, and uses cholic acid (TCA) only as a comparator, so the reported kinetic parameters (half-life, clearance) belong to the different substance ACA, not cholic acid. |
| popPK | Minegishi_2024 | irrelevant | 2 | 0 | The paper uses cholic acid as a dietary supplement to study the induction of CYP3A4 expression and its effect on triazolam pharmacokinetics, rather than reporting toxicokinetic parameters for cholic acid itself. |
| PGx | Minegishi_2024 | not_relevant | 0 | 0 | The paper reports drug-drug or drug-diet interactions affecting CYP3A4 and Triazolam PK, not a pharmacogenomic effect (genetic variant) on Cholic Acid PK/PD. |
| popPK | Mooradian_2014 | irrelevant | 0 | 0 | The paper is a review discussing the effects of nutritional supplements on HDL cholesterol levels, with no quantitative toxicokinetic parameters reported for cholic acid. |
| PGx | Mougey_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for montelukast, not cholic acid (which is only mentioned as a competitive inhibitor in in-vitro transport studies). |
| popPK | Ng_2025 | irrelevant | 1 | 2 | The paper models bacterial metabolism of cholic acid in an ex vivo microbiota system rather than measuring toxicokinetic parameters (half-life, clearance, distribution) for cholic acid in whole organisms (humans or animals). |
| PGx | Niwa_2015 | not_relevant | 0 | 0 | The paper is a review of wild-type enzyme kinetics and does not report pharmacogenomic variants affecting cholic acid PK/PD. |
| popPK | Omar_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rivastigmine in a nanoparticle carrier where cholic acid is a surface modifier, not the subject of toxicokinetic analysis. |
| PGx | Pal_2021 | not_relevant | 0 | 0 | The paper investigates the antimicrobial and plant-defense effects of cholic acid conjugates in rice and pathogens, involving no human pharmacogenomics or PK/PD parameters for drug treatment. |
| PGx | Pan_2017 | not_relevant | 0 | 0 | The paper investigates the effect of cholic acid feeding on CYP2D6 expression, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of cholic acid itself. |
| popPK | Pan_2023 | relevant | 4 | 3 | The paper provides concentration data for cholic acid (CA) in mouse bile and liver following CA challenge, which constitutes toxicokinetic data (disposition/retention), though it lacks specific rate constants or half-lives. |
| popPK | Paquette_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of a cholic-acid conjugated antibody for cancer imaging, not the toxicokinetic parameters of free cholic acid. |
| PGx | Pasternack_2025 | not_relevant | 0 | 0 | The paper reviews the treatment of CYP27A1 deficiency (CTX) with cholic acid but does not report pharmacogenomic effects of other variants on cholic acid PK/PD. |
| popPK | Plante_1994 | irrelevant | 0 | 0 | Cholic acid is used solely as a dietary component to induce hypercholesterolemia, and the study reports hemodynamic and vascular reactivity outcomes rather than kinetic parameters for cholic acid itself. |
| popPK | Posa_2009 | irrelevant | 0 | 0 | The paper measures critical micellar concentrations (CMC) and hydrophobicity in aqueous solution, which are physicochemical parameters, not in vivo toxicokinetic parameters (half-life, clearance, partition coefficients in biological tissues) for cholic acid. |
| popPK | Poša_2010 | irrelevant | 0 | 0 | The paper reports chromatographic retention coefficients and hydrophobicity measures, not in vivo toxicokinetic parameters such as clearance, half-life, or partition coefficients in biological tissues. |
| popPK | Quarfordt_1973 | relevant | 8 | 3 | The paper reports fractional metabolic rates (turnover) for cholic acid in humans, but specific numeric values for cholic acid are not explicitly listed in the provided evidence snippet. |
| popPK | Rauchbach_2022 | irrelevant | 0 | 0 | The paper focuses on the mechanistic effects of cholic acid on liver fibrosis and cell death, reporting no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for cholic acid. |
| PGx | Reyes_2000 | not_relevant | 2 | 5 | The paper discusses cholic acid as an endogenous metabolite in a disease context, not as a drug subject to pharmacogenomic analysis; genetic effects on cholic acid PK are not the primary focus. |
| popPK | Roda_1990 | irrelevant | 0 | 0 | The paper reports physicochemical lipophilicity partition coefficients (logP) in an octanol/water system, not biological toxicokinetic parameters in an organism. |
| popPK | Roda_2014 | irrelevant | 0 | 0 | Cholic acid is used only as a natural comparator in this study, which reports no quantitative kinetic parameters for it. |
| popPK | Rudolph_1993 | relevant | 9 | 2 | The paper reports quantitative kinetic parameters (pool sizes, fractional turnover, synthesis rates) for cholic acid in humans, but the specific numeric values are not present in the provided text. |
| popPK | Salvioli_1985 | relevant | 5 | 0 | The paper reports on the in vitro distribution and binding of cholic acid to lipoproteins, which constitutes a toxicokinetic parameter (distribution/partitioning), but specific numeric values for these parameters are not present in the provided text. |
| PGx | Schuetz_2001 | not_relevant | 2 | 1 | The paper discusses general bile acid pharmacology and gene-null mouse models, not the pharmacokinetics or pharmacodynamics of cholic acid as a specific drug in the context of human pharmacogenomics. |
| PGx | Skuladottir_2018 | not_relevant | 0 | 0 | The study reports the association between a genetic variant and native bile acid levels/dietary response, not the pharmacokinetics or pharmacodynamics of cholic acid as an administered drug. |
| popPK | Soroka_2011 | irrelevant | 2 | 0 | The paper reports qualitative changes in urinary clearance and fecal excretion patterns but does not provide specific quantitative kinetic parameters (like half-life, rate constants, or partition coefficients) for cholic acid itself in the text or evidence provided. |
| popPK | Srivastava_2001 | irrelevant | 0 | 0 | The paper focuses on the mechanistic effects of cholic acid on lipoprotein levels (apoB, LDL, HDL) in mice rather than reporting kinetic parameters like half-life, clearance, or volume of distribution for cholic acid itself. |
| popPK | Stadlbauer_2007 | relevant | 8 | 2 | The study reports relative clearance/elimination efficiency of cholic acid in human patients, but specific kinetic rate constants or volumes are not explicitly provided in the text (values likely in figures/tables not fully detailed). |
| popPK | Sung_1999 | irrelevant | 0 | 0 | The paper reports functional outcomes (superoxide production) and cell viability, but contains no quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for cholic acid. |
| popPK | Sârbu_2008 | irrelevant | 0 | 10 | The paper models physicochemical partition coefficients (Log P) in vitro, not in vivo toxicokinetic parameters like clearance, half-life, or tissue distribution. |
| PGx | Taylor_2024 | not_relevant | 0 | 0 | The study examines the effects of cholic acid as a therapeutic in a mouse model, focusing on disease progression (MASH) rather than pharmacokinetic or pharmacodynamic parameters modulated by human genetic variants. |
| popPK | Taylor_2024_2 | irrelevant | 0 | 0 | The paper reports tissue bile acid profiles and signaling outcomes following feeding, but does not provide quantitative kinetic parameters (half-life, clearance, partition coefficients, etc.) for cholic acid. |
| PGx | Telbisz_2014 | not_relevant | 1 | 0 | The paper is an in vitro mechanistic study of ABCG2 transporter mutations and sterol regulation, and does not report pharmacogenomic effects on cholic acid PK/PD in humans. |
| PGx | Tsai_2026 | not_relevant | 0 | 0 | The paper describes a clinical case report of ELOVL1-related disorder and cholic acid treatment, but does not report a pharmacogenomic effect of a gene variant on cholic acid PK/PD parameters. |
| popPK | Verschuur_2001 | irrelevant | 0 | 0 | The study focuses on the kinetic parameters of fibrinogen, with cholic acid serving only as a dietary supplement/comparator, not the subject substance. |
| PGx | Wang_2020 | not_relevant | 1 | 5 | The paper investigates the physiological role of the Sult2a8 gene in bile acid homeostasis and cholesterol metabolism in mice, not the pharmacokinetics or pharmacodynamics of cholic acid administered as a therapeutic drug. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper studies the interaction of bile acids with the OAT2 transporter and reports that SNPs reduce transporter activity, but it does not report changes in the PK/PD parameters of cholic acid itself due to these genetic variants. |
| PGx | Xiang_2009 | not_relevant | 5 | 8 | The study reports the effect of SLCO1B1 genotype on endogenous cholic acid plasma concentrations, but does not report pharmacokinetic or pharmacodynamic parameters resulting from the administration of cholic acid as a drug. |
| PGx | Xiang_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of ursodeoxycholic acid (UDCA) and reports no effect, rather than a pharmacogenomic effect on the PK/PD of cholic acid. |
| popPK | Xiong_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of nifedipine, mentioning cholic acid only as one of several bile acids whose levels changed in rat plasma, without reporting specific kinetic parameters (half-life, clearance, etc.) for cholic acid itself. |
| popPK | Yamato_2001 | irrelevant | 3 | 2 | The paper reports urinary concentrations of cholic acid and discusses hepatic clearance qualitatively in preterm infants, but provides no specific quantitative kinetic parameters (rate constants, half-lives, or specific clearance values). |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper reports the effect of a gene knockdown (TOMM40) on endogenous lipid and bile acid metabolism, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of the administered drug cholic acid. |
| popPK | Yida_2022 | irrelevant | 0 | 0 | The paper uses cholic acid as a component of the high-cholesterol diet to induce hyperlipidemia in rats, but it does not report any toxicokinetic parameters (half-life, clearance, etc.) for cholic acid itself. |
| popPK | Yin_2023 | irrelevant | 1 | 0 | The paper reports serum concentrations of cholic acid in mice and humans to assess microbiome effects, but provides no quantitative toxicokinetic parameters (e.g., clearance, half-life, volume of distribution) for the substance itself. |
| popPK | Zhang_2017 | irrelevant | 5 | 1 | The paper reports individualized AUC values for d4-cholic acid in rats, which is a kinetic parameter, but the specific numeric values are not present in the provided evidence. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper investigates circadian rhythms of endogenous bile acids following cholecystectomy, not the effect of a specific gene variant (pharmacogenomics) on the PK/PD of exogenous cholic acid. |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The paper analyzes metabolomics in ACE2 knockout mice and reports cholic acid as a differential metabolite associated with metabolic disorders, not as a drug whose PK/PD is affected by pharmacogenomics. |
| PGx | Ziegler_2024 | not_relevant | 0 | 10 | The paper focuses on developing a diagnostic assay for bile acid profiles in cholestatic diseases and does not report any pharmacogenomic effect on the pharmacokinetics of cholic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholic_acid%5D&body=Drug%3A%20cholic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cholic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 04:43 UTC</sub>
