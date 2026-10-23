<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nomifensine&quot;}]"></div>

# nomifensine

- **generic name:** nomifensine
- **ATC codes:** `N06AX04`
- **DrugBank:** [DB04821](https://go.drugbank.com/drugs/DB04821) · **PubChem:** [CID 4528](https://pubchem.ncbi.nlm.nih.gov/compound/4528)
- **molar mass:** 238.3275 g/mol (C16H18N2) — DrugBank
- **groups:** approved, withdrawn

## About

Nomifensine is an antidepressant that acts as a dopamine reuptake inhibitor. It has been withdrawn from the market and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409948](https://www.wikidata.org/wiki/Q409948) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Tong_2020_IC50](drugs/drug_nomifensine/pd_Tong_2020_IC50.md) | MCF7 cell viability inhibition ← nomifensine · inhibition effect | — | Tong XY et al., Identification of NUDT5 Inhibitors From…, Frontiers in molecular bios… (2020) | [10.3389/fmolb.2020.00044](https://doi.org/10.3389/fmolb.2020.00044) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:27 | 0:34 | 0/0/0 | 1/0/0 | 0/0/0 | 41,209/1,501 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 114 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heptner_1984.pdf` | Heptner W et al., Kinetics and metabolism of nomifensine, The Journal of clinical psy… (1984) | popPK | 5 | not captured | [6370971](https://pubmed.ncbi.nlm.nih.gov/6370971) | A review of nomifensine PK reporting a two-compartment model with a few numeric values (t½ 2 h, 88% renal excretion) but no CL/V/ka parameters, which likely reside in the original studies rather than this text. |
| `Krueger_1990.pdf` | Krueger BK, Kinetics and block of dopamine uptake i…, Journal of neurochemistry (1990) | pd | 5 | [10.1111/j.1471-4159.1990.tb08847.x](https://doi.org/10.1111/j.1471-4159.1990.tb08847.x) | [2355221](https://www.ncbi.nlm.nih.gov/pubmed/2355221) | metadata signals extractable PD data (sigmoid) |
| `Contreras_1990.pdf` | Contreras PC et al., GBR-12909 and fluspirilene potently inh…, Life sciences (1990) | pd | 4 | [10.1016/0024-3205(90)90446-x](https://doi.org/10.1016/0024-3205(90)90446-x) | [1980329](https://www.ncbi.nlm.nih.gov/pubmed/1980329) | metadata signals extractable PD data (IC50) |
| `Drucker_1990.pdf` | Drucker G et al., Dopamine uptake inhibitory capacities o…, Brain research (1990) | pd | 4 | [10.1016/0006-8993(90)90318-6](https://doi.org/10.1016/0006-8993(90)90318-6) | [2137718](https://www.ncbi.nlm.nih.gov/pubmed/2137718) | metadata signals extractable PD data (IC50) |
| `Firestone_1993.pdf` | Firestone JA et al., Actions of A-75200, a novel catecholami…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8450458](https://www.ncbi.nlm.nih.gov/pubmed/8450458) | metadata signals extractable PD data (EC50) |
| `Lee_1984.pdf` | Lee PH et al., Effect of steroids on the inhibition of…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90712-x](https://doi.org/10.1016/0014-2999(84)90712-x) | [6529976](https://www.ncbi.nlm.nih.gov/pubmed/6529976) | metadata signals extractable PD data (IC50) |
| `Lonart_1994.pdf` | Lonart G et al., Inhibitory effects of nitric oxide on t…, Journal of neurochemistry (1994) | pd | 4 | [10.1046/j.1471-4159.1994.63062108.x](https://doi.org/10.1046/j.1471-4159.1994.63062108.x) | [7964730](https://www.ncbi.nlm.nih.gov/pubmed/7964730) | metadata signals extractable PD data (IC50) |
| `Nakachi_1995.pdf` | Nakachi N et al., Effects of various dopamine uptake inhi…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00246-h](https://doi.org/10.1016/0014-2999(95)00246-h) | [7589207](https://www.ncbi.nlm.nih.gov/pubmed/7589207) | metadata signals extractable PD data (IC50) |
| `Nakanishi_1995.pdf` | Nakanishi N et al., Cyclic AMP-dependent modulation of vesi…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64020600.x](https://doi.org/10.1046/j.1471-4159.1995.64020600.x) | [7830053](https://www.ncbi.nlm.nih.gov/pubmed/7830053) | metadata signals extractable PD data (EC50) |
| `Sallés_1993.pdf` | Sallés J et al., Modulation of alpha 1-adrenoceptors and…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb12860.x](https://doi.org/10.1111/j.1476-5381.1993.tb12860.x) | [8096783](https://www.ncbi.nlm.nih.gov/pubmed/8096783) | metadata signals extractable PD data (Emax) |
| `Schoemaker_1985.pdf` | Schoemaker H et al., Sodium dependent [3H]cocaine binding as…, Naunyn-Schmiedeberg's archi… (1985) | pd | 4 | [10.1007/BF00501873](https://doi.org/10.1007/BF00501873) | [3927176](https://www.ncbi.nlm.nih.gov/pubmed/3927176) | metadata signals extractable PD data (IC50) |
| `Strait_1986.pdf` | Strait KA et al., Dopamine autoreceptor regulation of the…, Molecular pharmacology (1986) | pd | 4 | not captured | [2872588](https://www.ncbi.nlm.nih.gov/pubmed/2872588) | metadata signals extractable PD data (EC50) |
| `Szász_2005.pdf` | Szász BK et al., Carrier-mediated release of monoamines…, Neuropharmacology (2005) | pd | 4 | [10.1016/j.neuropharm.2005.03.023](https://doi.org/10.1016/j.neuropharm.2005.03.023) | [15993437](https://www.ncbi.nlm.nih.gov/pubmed/15993437) | metadata signals extractable PD data (IC50) |
| `Trendelenburg_1994.pdf` | Trendelenburg AU et al., Presynaptic alpha 2A-adrenoceptors inhi…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00173016](https://doi.org/10.1007/BF00173016) | [7870186](https://www.ncbi.nlm.nih.gov/pubmed/7870186) | metadata signals extractable PD data (EC50) |
| `Wieczorek_1994.pdf` | Wieczorek WJ et al., A quantitative comparison on the effect…, Brain research (1994) | pd | 4 | [10.1016/0006-8993(94)90951-2](https://doi.org/10.1016/0006-8993(94)90951-2) | [7820642](https://www.ncbi.nlm.nih.gov/pubmed/7820642) | metadata signals extractable PD data (EC50) |
| `Yeghiayan_1997.pdf` | Yeghiayan SK et al., Role of dopamine in behavioral effects…, Pharmacology, biochemistry,… (1997) | pd | 4 | [10.1016/s0091-3057(96)00217-1](https://doi.org/10.1016/s0091-3057(96)00217-1) | [9050082](https://www.ncbi.nlm.nih.gov/pubmed/9050082) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T23:27:22.896101+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso_1996 | irrelevant | 0 | 0 | Nomifensine is only used as a dopamine uptake tool in an in vitro tachykinin study; no PK parameters for nomifensine are reported. |
| PD | Alonso_1996 | not_relevant | 0 | 0 | The paper uses nomifensine only as a tool to identify dopamine neurons via uptake inhibition, and does not report any pharmacodynamic or exposure-response relationship for nomifensine itself. |
| popPK | Boireau_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release where nomifensine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Boireau_1998 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for riluzole, not nomifensine; nomifensine is only mentioned as a positive control at a single concentration without dose-response analysis. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | Neurochemical effects of nomifensine on monoamine metabolism in rat brain; no PK disposition parameters reported. |
| popPK | Chan_1980 | irrelevant | 2 | 1 | The study is a pharmacodynamic comparison with only a single plasma concentration measurement at 2 hours, lacking quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Chan_1980 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects and single-timepoint plasma concentrations but does not provide a concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a study on stem cell therapy in a zebrafish model where nomifensine is only mentioned as a comparator drug, with no pharmacokinetic parameters reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper studies stem cell conditioned medium in a zebrafish model and only mentions nomifensine as a qualitative comparator without providing any PK/PD data or numeric parameters for it. |
| popPK | Contreras_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Contreras_1990 | not_relevant | 0 | 0 | The paper reports in vitro binding inhibition of sigma receptors by GBR-12909 and fluspirilene, not nomifensine, and does not provide pharmacodynamic exposure-response data for the target drug. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | Nomifensine is only a co-administered uptake inhibitor in an in-vitro neurotransmitter release study; no PK parameters reported. |
| PD | Cubeddu_1989 | not_relevant | 0 | 0 | The paper focuses on the interaction between phorbol esters and D2 receptors; nomifensine is only mentioned as a co-treatment to block uptake, and no exposure-response or dose-response parameters for nomifensine are reported. |
| popPK | Dembiec-Cohen_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The paper is a structure-based drug discovery study focusing on allosteric inhibition of the dopamine transporter, where nomifensine is used only as an orthosteric ligand/comparator, and no pharmacokinetic parameters are reported. |
| PD | Deng_2023 | not_relevant | 3 | 2 | The paper reports an IC50 for a novel allosteric inhibitor (Z1078601926) in the presence of nomifensine, but it does not report a dose-response curve or PD parameters for nomifensine itself, nor does it perform a PK/PD analysis. |
| popPK | Drucker_1990 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PD | Drucker_1990 | not_relevant | 0 | 0 | The paper focuses on beta-carboline analogs of MPTP oxidation products and does not report pharmacodynamic or exposure-response data for nomifensine. |
| popPK | Faggin_1990 | irrelevant | 0 | 0 | Nomifensine is only used as a dopamine uptake inhibitor in a neurochemistry study; no PK parameters for it are reported. |
| PD | Faggin_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of neurotensin, and nomifensine is only mentioned as a non-inhibitory co-treatment without any dose-response or exposure-response analysis for nomifensine itself. |
| popPK | Fernandes_2004 | irrelevant | 0 | 0 | Nomifensine is only used as a dopamine transporter blocker in a rat neurochemistry study; no PK parameters reported. |
| PD | Fernandes_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine release by a scorpion toxin; nomifensine is used only as a qualitative tool compound to block the dopamine transporter, with no exposure-response or dose-response analysis for nomifensine itself. |
| popPK | Firestone_1993 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Firestone_1993 | not_relevant | 0 | 0 | The paper studies A-75200, not nomifensine, and focuses on cellular mechanisms rather than pharmacokinetic/pharmacodynamic modeling. |
| popPK | García-Sanz_2001 | irrelevant | 0 | 0 | Nomifensine is only used as a 1 µM tool to block dopamine uptake in an in-vitro rat synaptosome study; no PK parameters for it are reported. |
| PD | García-Sanz_2001 | not_relevant | 0 | 0 | The paper studies quinpirole and 7-OH-DPAT; nomifensine is only used as a control agent to rule out DA uptake involvement, with no dose-response or PD parameters reported for it. |
| popPK | Halberg_1979 | irrelevant | 0 | 0 | The paper focuses on chronopharmacology and circadian rhythms in rats, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nomifensine. |
| PD | Halberg_1979 | not_relevant | 1 | 0 | The paper describes a chronopharmacological effect (speed of adjustment to schedule shifts) but does not report concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Heptner_1984 | relevant | 5 | 3 | A review of nomifensine PK reporting a two-compartment model with a few numeric values (t½ 2 h, 88% renal excretion) but no CL/V/ka parameters, which likely reside in the original studies rather than this text. |
| popPK | Hoffman_2016 | irrelevant | 1 | 1 | Nomifensine is only used as a DAT inhibitor probe in a dopamine release/uptake model; no PK disposition parameters for nomifensine are reported. |
| popPK | Justo_2016 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of isatin on dopamine release, using nomifensine only as a DAT blocker for mechanistic investigation, and reports no pharmacokinetic parameters for nomifensine. |
| PD | Justo_2016 | not_relevant | 0 | 0 | The paper studies the mechanism of action of isatin, and nomifensine is only used as a tool compound to block DAT, with no exposure-response or dose-response analysis performed for nomifensine. |
| popPK | Karoum_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of dopamine release and metabolism in rat brain regions, not a pharmacokinetic study reporting disposition parameters for nomifensine. |
| PD | Karoum_1994 | not_relevant | 2 | 0 | The paper describes qualitative regional changes in dopamine metabolite formation rates following single-dose administration but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50). |
| popPK | Krueger_1990 | irrelevant | 0 | 0 | In-vitro rat synaptosome dopamine uptake study; nomifensine is only a uptake blocker, no PK parameters for nomifensine. |
| PD | Krueger_1990 | not_relevant | 3 | 2 | The paper reports qualitative competitive inhibition of DA uptake by nomifensine but does not provide numeric PD parameters (e.g., Ki, IC50) or a quantitative concentration-effect curve for the drug. |
| popPK | Kruse_1977 | irrelevant | 0 | 0 | The study focuses on the pharmacological and biochemical properties of nomifensine metabolites, reporting no pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Lee_1984 | irrelevant | 0 | 0 | The study is an in-vitro/in-ex-vivo mechanistic investigation of platelet serotonin uptake kinetics (IC50, Km, Vmax) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume for nomifensine. |
| PD | Lee_1984 | not_relevant | 4 | 2 | The paper reports qualitative changes in IC50 for nomifensine under different steroid conditions but does not provide the specific numeric values for these parameters in the text. |
| popPK | Lonart_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitric oxide effects on dopamine transport, using nomifensine only as a comparator inhibitor, and reports no pharmacokinetic parameters. |
| popPK | Meltzer_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of prolactin secretion in rats and does not report any pharmacokinetic parameters for nomifensine. |
| PD | Meltzer_1981 | not_relevant | 1 | 0 | The paper only qualitatively states that nomifensine inhibited reserpine-induced prolactin secretion, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| popPK | Nakachi_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine uptake inhibition and behavior, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for nomifensine. |
| PD | Nakachi_1995 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative/semi-quantitative in vivo effects (fold-increase in dopamine) at a single fixed dose, but does not provide a concentration-effect curve or numeric PD parameters (like Emax/EC50) for the in vivo response. |
| popPK | Nakanishi_1995 | irrelevant | 0 | 0 | In-vitro PC12 cell study of monoamine transport; nomifensine is only an uptake inhibitor tool, no PK parameters. |
| PD | Nakanishi_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for cAMP analogs and other agents, but nomifensine is only mentioned qualitatively regarding its time-course profile without any numeric dose-response or concentration-effect data. |
| popPK | Nomikos_1990 | irrelevant | 0 | 0 | The study is a mechanistic microdialysis experiment measuring dopamine concentrations, not a pharmacokinetic study reporting disposition parameters for nomifensine. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | In-vitro receptor binding study where nomifensine is only a displacing ligand; no PK parameters for nomifensine. |
| PD | Richfield_1991 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (Ki/IC50) for nomifensine, which is a pharmacological binding parameter, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system. |
| popPK | Riegert_2008 | irrelevant | 0 | 0 | The study is an in-vitro slice superfusion experiment investigating neurochemical release, and nomifensine is used only as a tool compound to block reuptake, not as the subject of pharmacokinetic analysis. |
| PD | Riegert_2008 | not_relevant | 0 | 0 | The paper investigates the effects of ethanol and MDMA on neurotransmitter release; nomifensine is used only as a tool compound to block reuptake, and no pharmacodynamic or exposure-response relationship for nomifensine is reported. |
| popPK | Saletu_1982 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for nomifensine, but only provides a qualitative estimate for half-life (~2 h) without specific numeric values for clearance, volume, or rate constants. |
| popPK | Saletu_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic/pharmaco-EEG study where nomifensine is used only as a reference drug, and no pharmacokinetic parameters are reported. |
| PD | Saletu_1983 | not_relevant | 2 | 1 | The paper focuses on pirlindol and only provides qualitative comparisons and time-to-max-effect for nomifensine without numeric concentration-effect parameters or a formal PD model. |
| popPK | Sallés_1993 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Sallés_1993 | not_relevant | 0 | 0 | The paper focuses on the modulation of alpha 1-adrenoceptors in rat vas deferens following chronic nomifensine treatment, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or numeric PD parameters (such as Emax or EC50) for nomifensine itself. |
| popPK | Salmon_1990 | irrelevant | 3 | 2 | PET tracer binding study of [11C]nomifensine in brain; no numeric disposition PK parameters (CL, V, ka) are reported in the evidence. |
| popPK | Schiwy_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for brofaromine where nomifensine is used only as a comparator drug, and no pharmacokinetic parameters are reported. |
| PD | Schiwy_1989 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for brofaromine, not nomifensine, and nomifensine is only used as a fixed-dose comparator without specific PD parameter analysis. |
| popPK | Schoemaker_1985 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Schoemaker_1985 | not_relevant | 0 | 0 | The paper investigates cocaine binding in Parkinson's disease and does not report any pharmacodynamic or exposure-response data for nomifensine. |
| popPK | Sharif_1989 | irrelevant | 0 | 0 | The paper is an in-vitro binding study where nomifensine is used only as a competitive inhibitor to characterize the dopamine transporter, not as the subject of a pharmacokinetic analysis. |
| PD | Sharif_1989 | not_relevant | 3 | 4 | The paper reports in vitro binding affinity (Ki) and uptake inhibition (IC50) constants for nomifensine, which are pharmacological potency parameters, but it does not report an in vivo exposure-response or dose-response relationship (e.g., Emax, EC50, or effect vs. plasma concentration) for the drug. |
| popPK | Sistovaris_1983 | irrelevant | 4 | 1 | This is an analytical method paper for urine assay; it mentions a two-compartment model but no numeric PK parameter values are present in the evidence. |
| popPK | Stauderman_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin uptake in rat spinal cord synaptosomes, not a pharmacokinetic study, and nomifensine is used only as a comparator inhibitor. |
| popPK | Strait_1986 | irrelevant | 0 | 0 | In-vitro neurochemistry study of tyrosine hydroxylase; nomifensine is only a co-addition to prevent dopamine metabolism, with no PK parameters. |
| PD | Strait_1986 | not_relevant | 1 | 1 | The paper reports IC50 values for dopamine and apomorphine in blocking tyrosine hydroxylase activation, but nomifensine is only used as a tool compound (MAO inhibitor) to prevent dopamine metabolism, not as the subject of a dose-response or exposure-response analysis. |
| popPK | Suarez-Roca_1987 | irrelevant | 0 | 0 | Neurochemistry study in rabbit brain slices; nomifensine is only a tool drug, no PK parameters reported. |
| PD | Suarez-Roca_1987 | not_relevant | 2 | 1 | The paper mentions nomifensine only qualitatively as a tool to increase synaptic dopamine, without providing any specific concentration-effect data, dose-response curves, or numeric PD parameters for nomifensine itself. |
| popPK | Szász_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of monoamine release where nomifensine is used only as a tool compound (uptake inhibitor), not as the subject of pharmacokinetic analysis. |
| PD | Szász_2005 | not_relevant | 0 | 0 | The paper reports dose-response data for DMPP (the agonist), not nomifensine; nomifensine is used only as a qualitative inhibitor to distinguish release mechanisms. |
| popPK | Taeuber_1979 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of acute effects and does not report any pharmacokinetic parameters for nomifensine. |
| PD | Taeuber_1979 | not_relevant | 2 | 1 | The study reports qualitative behavioral and physiological effects of fixed doses but does not provide plasma concentration data or numeric PD parameters (e.g., EC50, Emax) to establish an exposure-response relationship. |
| popPK | Tedroff_1990 | irrelevant | 3 | 2 | PET tracer study of brain uptake kinetics, not systemic disposition PK; no numeric CL/V/ka values appear in the evidence. |
| popPK | Tong_2020 | irrelevant | 0 | 0 | The paper is a drug repositioning study focusing on molecular docking and cell viability (IC50) for NUDT5 inhibition, not a pharmacokinetic study reporting disposition parameters for nomifensine. |
| popPK | Trendelenburg_1994 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Trendelenburg_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of alpha 2A-adrenoceptors in rabbit brain slices and does not report any pharmacodynamic or exposure-response data for nomifensine. |
| popPK | Wieczorek_1994 | irrelevant | 0 | 0 | no_text gate: only 211 chars of text extracted (&lt; 400) |
| popPK | Yeghiayan_1997 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Yeghiayan_1997 | not_relevant | 0 | 0 | The paper investigates the role of dopamine in the behavioral effects of serotonin microinjected into the rat striatum and does not mention nomifensine or report any pharmacodynamic parameters for it. |
| PGx | Yu_2010 | not_relevant | 2 | 3 | In vitro reaction phenotyping by recombinant enzymes/antibodies, not a genetic variant effect on in vivo PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
