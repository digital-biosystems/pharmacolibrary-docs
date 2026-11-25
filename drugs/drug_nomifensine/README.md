<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nomifensine&quot;}]"></div>

# nomifensine

- **generic name:** nomifensine
- **ATC codes:** `N06AX04`
- **DrugBank:** [DB04821](https://go.drugbank.com/drugs/DB04821) · **PubChem:** [CID 4528](https://pubchem.ncbi.nlm.nih.gov/compound/4528)
- **molar mass:** 238.3275 g/mol (C16H18N2) — DrugBank
- **groups:** approved, withdrawn

## About

Nomifensine is a norepinephrine-dopamine reuptake inhibitor used for depression. The drug was withdrawn from the market due to safety concerns.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q409948](https://www.wikidata.org/wiki/Q409948), [Wikipedia](https://en.wikipedia.org/wiki/Nomifensine?oldid=1359321448) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Tong_2020_IC50](drugs/drug_nomifensine/pd_Tong_2020_IC50.md) | MCF7 cell viability inhibition ← nomifensine · inhibition effect | — | Tong XY et al., Identification of NUDT5 Inhibitors From…, Frontiers in molecular bios… (2020) | [10.3389/fmolb.2020.00044](https://doi.org/10.3389/fmolb.2020.00044) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kruse_1977_DA_uptake](drugs/drug_nomifensine/pd_Kruse_1977_DA_uptake.md) | dopamine (DA) uptake ← nomifensine · inhibition effect | — | Kruse H et al., Pharmacological and biochemical studies…, Psychopharmacology (1977) | [10.1007/BF00431726](https://doi.org/10.1007/BF00431726) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kruse_1977_NA_uptake](drugs/drug_nomifensine/pd_Kruse_1977_NA_uptake.md) | noradrenaline (NA) uptake ← nomifensine · inhibition effect | — | Kruse H et al., Pharmacological and biochemical studies…, Psychopharmacology (1977) | [10.1007/BF00431726](https://doi.org/10.1007/BF00431726) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Stauderman_1985_3H_5_HT_uptake](drugs/drug_nomifensine/pd_Stauderman_1985_3H_5_HT_uptake.md) | Sodium-dependent [3H]serotonin accumulation ← nomifensine · inhibition effect | — | Stauderman KA et al., Characterization of sodium-dependent, h…, Brain research (1985) | [10.1016/0006-8993(85)90003-4](https://doi.org/10.1016/0006-8993(85)90003-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:20 | 0:03 | 0/0/0 | 1/3/0 | 0/0/0 | 4,381/164 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 114 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krueger_1990.pdf` | Krueger BK, Kinetics and block of dopamine uptake i…, Journal of neurochemistry (1990) | pd | 5 | [10.1111/j.1471-4159.1990.tb08847.x](https://doi.org/10.1111/j.1471-4159.1990.tb08847.x) | [2355221](https://www.ncbi.nlm.nih.gov/pubmed/2355221) | metadata signals extractable PD data (sigmoid) |
| `Contreras_1990.pdf` | Contreras PC et al., GBR-12909 and fluspirilene potently inh…, Life sciences (1990) | pd | 4 | [10.1016/0024-3205(90)90446-x](https://doi.org/10.1016/0024-3205(90)90446-x) | [1980329](https://www.ncbi.nlm.nih.gov/pubmed/1980329) | metadata signals extractable PD data (IC50) |
| `Drucker_1990.pdf` | Drucker G et al., Dopamine uptake inhibitory capacities o…, Brain research (1990) | pd | 4 | [10.1016/0006-8993(90)90318-6](https://doi.org/10.1016/0006-8993(90)90318-6) | [2137718](https://www.ncbi.nlm.nih.gov/pubmed/2137718) | metadata signals extractable PD data (IC50) |
| `Firestone_1993.pdf` | Firestone JA et al., Actions of A-75200, a novel catecholami…, The Journal of pharmacology… (1993) | pd | 4 |  | [8450458](https://www.ncbi.nlm.nih.gov/pubmed/8450458) | metadata signals extractable PD data (EC50) |
| `Lee_1984.pdf` | Lee PH et al., Effect of steroids on the inhibition of…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90712-x](https://doi.org/10.1016/0014-2999(84)90712-x) | [6529976](https://www.ncbi.nlm.nih.gov/pubmed/6529976) | metadata signals extractable PD data (IC50) |
| `Lonart_1994.pdf` | Lonart G et al., Inhibitory effects of nitric oxide on t…, Journal of neurochemistry (1994) | pd | 4 | [10.1046/j.1471-4159.1994.63062108.x](https://doi.org/10.1046/j.1471-4159.1994.63062108.x) | [7964730](https://www.ncbi.nlm.nih.gov/pubmed/7964730) | metadata signals extractable PD data (IC50) |
| `Nakachi_1995.pdf` | Nakachi N et al., Effects of various dopamine uptake inhi…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00246-h](https://doi.org/10.1016/0014-2999(95)00246-h) | [7589207](https://www.ncbi.nlm.nih.gov/pubmed/7589207) | metadata signals extractable PD data (IC50) |
| `Nakanishi_1995.pdf` | Nakanishi N et al., Cyclic AMP-dependent modulation of vesi…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64020600.x](https://doi.org/10.1046/j.1471-4159.1995.64020600.x) | [7830053](https://www.ncbi.nlm.nih.gov/pubmed/7830053) | metadata signals extractable PD data (EC50) |
| `Sallés_1993.pdf` | Sallés J et al., Modulation of alpha 1-adrenoceptors and…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb12860.x](https://doi.org/10.1111/j.1476-5381.1993.tb12860.x) | [8096783](https://www.ncbi.nlm.nih.gov/pubmed/8096783) | metadata signals extractable PD data (Emax) |
| `Schoemaker_1985.pdf` | Schoemaker H et al., Sodium dependent [3H]cocaine binding as…, Naunyn-Schmiedeberg's archi… (1985) | pd | 4 | [10.1007/BF00501873](https://doi.org/10.1007/BF00501873) | [3927176](https://www.ncbi.nlm.nih.gov/pubmed/3927176) | metadata signals extractable PD data (IC50) |
| `Strait_1986.pdf` | Strait KA et al., Dopamine autoreceptor regulation of the…, Molecular pharmacology (1986) | pd | 4 |  | [2872588](https://www.ncbi.nlm.nih.gov/pubmed/2872588) | metadata signals extractable PD data (EC50) |
| `Szász_2005.pdf` | Szász BK et al., Carrier-mediated release of monoamines…, Neuropharmacology (2005) | pd | 4 | [10.1016/j.neuropharm.2005.03.023](https://doi.org/10.1016/j.neuropharm.2005.03.023) | [15993437](https://www.ncbi.nlm.nih.gov/pubmed/15993437) | metadata signals extractable PD data (IC50) |
| `Trendelenburg_1994.pdf` | Trendelenburg AU et al., Presynaptic alpha 2A-adrenoceptors inhi…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00173016](https://doi.org/10.1007/BF00173016) | [7870186](https://www.ncbi.nlm.nih.gov/pubmed/7870186) | metadata signals extractable PD data (EC50) |
| `Wieczorek_1994.pdf` | Wieczorek WJ et al., A quantitative comparison on the effect…, Brain research (1994) | pd | 4 | [10.1016/0006-8993(94)90951-2](https://doi.org/10.1016/0006-8993(94)90951-2) | [7820642](https://www.ncbi.nlm.nih.gov/pubmed/7820642) | metadata signals extractable PD data (EC50) |
| `Yeghiayan_1997.pdf` | Yeghiayan SK et al., Role of dopamine in behavioral effects…, Pharmacology, biochemistry,… (1997) | pd | 4 | [10.1016/s0091-3057(96)00217-1](https://doi.org/10.1016/s0091-3057(96)00217-1) | [9050082](https://www.ncbi.nlm.nih.gov/pubmed/9050082) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-24 04:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso_1996 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of dopamine neurons where nomifensine is used only as a reference for uptake inhibition, not as the subject of pharmacokinetic analysis. |
| PD | Alonso_1996 | not_relevant | 0 | 0 | The paper uses nomifensine only as a tool to identify dopamine neurons via uptake inhibition, and does not report any pharmacodynamic or exposure-response relationship for nomifensine itself. |
| PGx | Alonso_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of NK3 receptor stimulation on dopamine release in gerbil cell cultures, using nomifensine only as a tool to identify neurons, and contains no pharmacogenomic data. |
| popPK | Boireau_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release using nomifensine as a tool compound, not a pharmacokinetic study. |
| PD | Boireau_1998 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for riluzole, not nomifensine; nomifensine is only mentioned as a positive control at a single concentration without dose-response analysis. |
| PGx | Boireau_1998 | not_relevant | 0 | 0 | The paper examines the effect of riluzole on dopamine release, and nomifensine is only mentioned as a control agent. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | The study focuses on the neuropharmacological effects of nomifensine on monoamine metabolism (HVA, MOPEG, 5-HIAA) in rat brain rather than its own pharmacokinetic disposition parameters. |
| PGx | Broch_1987 | not_relevant | 0 | 0 | The paper describes standard pharmacological effects of nomifensine on neurotransmitter metabolism in rats and does not report any pharmacogenomic interactions or genetic variants affecting PK/PD. |
| popPK | Chan_1980 | irrelevant | 2 | 2 | The study is pharmacodynamic and only reports a single time-point plasma concentration, lacking quantitative disposition parameters like clearance or volume. |
| PD | Chan_1980 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects and single-timepoint plasma concentrations but does not provide a concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Chan_1980 | not_relevant | 0 | 0 | The paper reports pharmacodynamic profiles in normal subjects but does not report any effects of gene variants or genotypes on these parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a preclinical study using a zebrafish model of Parkinson's disease to test stem cell conditioned media, with nomifensine only mentioned as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper studies stem cell conditioned medium in a zebrafish model and only mentions nomifensine as a qualitative comparator without providing any PK/PD data or numeric parameters for it. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper reports on stem cell therapy in a zebrafish model and uses nomifensine only as a comparative control, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Contreras_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Contreras_1990 | not_relevant | 0 | 0 | The paper reports in vitro binding inhibition of sigma receptors by GBR-12909 and fluspirilene, not nomifensine, and does not provide pharmacodynamic exposure-response data for the target drug. |
| PGx | Contreras_1990 | not_relevant | 0 | 0 | The paper studies binding inhibition by GBR-12909 and fluspirilene, not nomifensine. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phorbol esters and dopamine receptors using nomifensine only as a neuronal uptake inhibitor to test receptor effects, reporting no pharmacokinetic parameters for nomifensine. |
| PD | Cubeddu_1989 | not_relevant | 0 | 0 | The paper focuses on the interaction between phorbol esters and D2 receptors; nomifensine is only mentioned as a co-treatment to block uptake, and no exposure-response or dose-response parameters for nomifensine are reported. |
| PGx | Cubeddu_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of phorbol esters on dopamine release using nomifensine as a tool compound, but does not report any pharmacogenomic effect on PK or PD parameters. |
| popPK | Dembiec-Cohen_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release inhibition and contains no pharmacokinetic parameters (CL, V, half-life, etc.). |
| PGx | Dembiec-Cohen_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of nomifensine on dopamine release in vitro but does not report any pharmacogenomic variation (gene variant/genotype) affecting its PK or PD parameters. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The study is an in vitro structure-based drug discovery study where nomifensine is used only as a positive control/orthosteric ligand, and no pharmacokinetic parameters for nomifensine are reported. |
| PD | Deng_2023 | not_relevant | 3 | 2 | The paper reports an IC50 for a novel allosteric inhibitor (Z1078601926) in the presence of nomifensine, but it does not report a dose-response curve or PD parameters for nomifensine itself, nor does it perform a PK/PD analysis. |
| PGx | Deng_2023 | not_relevant | 0 | 0 | The paper reports in silico and in vitro discovery of an allosteric inhibitor of the dopamine transporter, not a pharmacogenomic effect on nomifensine's PK or PD parameters. |
| popPK | Drucker_1990 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PD | Drucker_1990 | not_relevant | 0 | 0 | The paper focuses on beta-carboline analogs of MPTP oxidation products and does not report pharmacodynamic or exposure-response data for nomifensine. |
| PGx | Drucker_1990 | not_relevant | 0 | 0 | The paper studies dopamine uptake of MPTP analogs and does not involve nomifensine or pharmacogenomics. |
| popPK | Faggin_1990 | irrelevant | 0 | 0 | The study investigates neurotensin-induced dopamine release in vivo and in vitro, with nomifensine used only as a mechanistic tool to test for direct releasing effects, reporting no pharmacokinetic parameters for nomifensine. |
| PD | Faggin_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of neurotensin, and nomifensine is only mentioned as a non-inhibitory co-treatment without any dose-response or exposure-response analysis for nomifensine itself. |
| PGx | Faggin_1990 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of neurotensin on dopamine release and uses nomifensine as a tool compound, but it does not report the effect of any gene variant or genotype on nomifensine's PK or PD parameters. |
| popPK | Fernandes_2004 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of dopamine release mediated by scorpion toxin, where nomifensine is used only as a tool compound (DAT blocker), not as the subject of a pharmacokinetic analysis. |
| PD | Fernandes_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine release by a scorpion toxin; nomifensine is used only as a qualitative tool compound to block the dopamine transporter, with no exposure-response or dose-response analysis for nomifensine itself. |
| PGx | Fernandes_2004 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effect (gene variant/phenotype) on a PK or PD parameter of nomifensine; it uses nomifensine as a control inhibitor in a study on scorpion toxin mechanisms. |
| popPK | Firestone_1993 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Firestone_1993 | not_relevant | 0 | 0 | The paper studies A-75200, not nomifensine, and focuses on cellular mechanisms rather than pharmacokinetic/pharmacodynamic modeling. |
| PGx | Firestone_1993 | not_relevant | 0 | 0 | The paper studies the catecholamine uptake inhibitor A-75200, not nomifensine, and does not report pharmacogenomic effects on PK or PD. |
| popPK | García-Sanz_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on dopamine efflux where nomifensine is used as a tool compound, not the subject of pharmacokinetic analysis. |
| PD | García-Sanz_2001 | not_relevant | 0 | 0 | The paper studies quinpirole and 7-OH-DPAT; nomifensine is only used as a control agent to rule out DA uptake involvement, with no dose-response or PD parameters reported for it. |
| PGx | García-Sanz_2001 | not_relevant | 0 | 0 | The paper reports the effects of D2/D3 agonists on dopamine efflux and does not investigate the pharmacogenomic effects of gene variants on the PK/PD parameters of nomifensine. |
| popPK | Halberg_1979 | irrelevant | 0 | 0 | The paper describes chronopharmacological effects (behavioral/thermogenic) of nomifensine in rats without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Halberg_1979 | not_relevant | 1 | 0 | The paper describes a chronopharmacological effect (speed of adjustment to schedule shifts) but does not report concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| PGx | Halberg_1979 | not_relevant | 0 | 0 | The paper discusses chronopharmacology and circadian rhythms in rats, reporting no genetic variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Heptner_1984 | irrelevant | 0 | 0 | The paper is a review without original quantitative parameter values (CL, V, ka) provided in the text, and the abstract only offers qualitative descriptions and a half-life without other necessary PK parameters. |
| PGx | Heptner_1984 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetics and metabolism of nomifensine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hoffman_2016 | irrelevant | 0 | 0 | Nomifensine is used only as a dopamine transporter inhibitor for electrophysiological validation, with no pharmacokinetic parameters (CL, V, etc.) reported for the drug itself. |
| PGx | Hoffman_2016 | not_relevant | 0 | 0 | The paper describes a mathematical modeling approach for Fast-Scan Cyclic Voltammetry data and does not investigate the impact of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of nomifensine. |
| popPK | Justo_2016 | irrelevant | 0 | 0 | The study focuses on the neurochemical mechanisms of isatin, using nomifensine only as a dopamine transporter blocker (probe/co-administered agent) rather than characterizing its pharmacokinetics. |
| PD | Justo_2016 | not_relevant | 0 | 0 | The paper studies the mechanism of action of isatin, and nomifensine is only used as a tool compound to block DAT, with no exposure-response or dose-response analysis performed for nomifensine. |
| PGx | Justo_2016 | not_relevant | 0 | 0 | The paper studies the mechanism of action of isatin on dopamine release, mentioning nomifensine only as a non-specific tool for dopamine transporter blockade, not as a subject of pharmacogenomic analysis. |
| popPK | Karoum_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects on dopamine release and metabolism (measuring 3MT and DOPAC rates) rather than pharmacokinetic disposition parameters for nomifensine. |
| PD | Karoum_1994 | not_relevant | 2 | 0 | The paper describes qualitative regional changes in dopamine metabolite formation rates following single-dose administration but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50). |
| PGx | Karoum_1994 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of nomifensine on dopamine release in rats but does not investigate any pharmacogenomic factors (gene variants/genotypes) that modify these parameters. |
| popPK | Krueger_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake kinetics in rat synaptosomes, not a pharmacokinetic study of nomifensine disposition. |
| PD | Krueger_1990 | not_relevant | 3 | 2 | The paper reports qualitative competitive inhibition of DA uptake by nomifensine but does not provide numeric PD parameters (e.g., Ki, IC50) or a quantitative concentration-effect curve for the drug. |
| PGx | Krueger_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine uptake inhibition by nomifensine in rat synaptosomes and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kruse_1977 | irrelevant | 0 | 0 | The paper reports pharmacological potency (ED50, IC50) and toxicity data, not quantitative pharmacokinetic parameters (CL, V, ka) for nomifensine. |
| PGx | Kruse_1977 | not_relevant | 0 | 0 | The paper studies the pharmacology of nomifensine metabolites and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lee_1984 | irrelevant | 1 | 0 | The paper reports in vitro IC50 values for serotonin uptake inhibition by nomifensine, which is a pharmacodynamic/mechanistic assay rather than a disposition or population-pharmacokinetic study of the drug's ADME. |
| PD | Lee_1984 | not_relevant | 4 | 2 | The paper reports qualitative changes in IC50 for nomifensine under different steroid conditions but does not provide the specific numeric values for these parameters in the text. |
| PGx | Lee_1984 | not_relevant | 0 | 0 | The paper investigates the effect of steroids on platelet serotonin uptake, which is a physiological/pharmacological study, not a pharmacogenomic study involving genetic variants affecting PK or PD parameters. |
| popPK | Lonart_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitric oxide effects on dopamine uptake where nomifensine is used merely as a comparator tool to inhibit the transporter, not as the subject of pharmacokinetic analysis. |
| PGx | Lonart_1994 | not_relevant | 0 | 0 | The paper investigates the effect of nitric oxide on dopamine transport, using nomifensine as a reference inhibitor, but does not report any pharmacogenomic effects on nomifensine's PK or PD parameters. |
| popPK | Meltzer_1981 | irrelevant | 0 | 0 | The study is a neuropharmacological assessment of prolactin levels in rats, not a pharmacokinetic study, and contains no disposition parameters for nomifensine. |
| PD | Meltzer_1981 | not_relevant | 1 | 0 | The paper only qualitatively states that nomifensine inhibited reserpine-induced prolactin secretion, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| PGx | Meltzer_1981 | not_relevant | 0 | 0 | The paper studies the effect of nomifensine on rat serum prolactin levels but does not investigate any genetic variants or genotypes. |
| popPK | Nakachi_1995 | irrelevant | 0 | 0 | The study measures striatal dopamine levels and behavior (pharmacodynamics) and in vitro binding affinity, not pharmacokinetic disposition parameters. |
| PD | Nakachi_1995 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative/semi-quantitative in vivo effects (fold-increase in dopamine) at a single fixed dose, but does not provide a concentration-effect curve or numeric PD parameters (like Emax/EC50) for the in vivo response. |
| PGx | Nakachi_1995 | not_relevant | 0 | 0 | The study is a preclinical (animal) pharmacological comparison and does not report pharmacogenomic effects on a PK or PD parameter of nomifensine. |
| popPK | Nakanishi_1995 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on catecholamine transport in PC12 cells where nomifensine is used only as a comparative agent, with no pharmacokinetic parameters reported. |
| PD | Nakanishi_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for cAMP analogs and other agents, but nomifensine is only mentioned qualitatively regarding its time-course profile without any numeric dose-response or concentration-effect data. |
| PGx | Nakanishi_1995 | not_relevant | 0 | 0 | The paper studies the mechanism of cAMP modulation of vesicular monoamine transport in PC12 cells and uses nomifensine only as a control inhibitor; it does not report a pharmacogenomic effect (gene variant/phenotype) on PK or PD parameters. |
| popPK | Nomikos_1990 | irrelevant | 0 | 0 | The study characterizes the pharmacodynamic effects of locally applied drugs on extracellular dopamine levels via microdialysis and does not report population pharmacokinetic parameters (CL, V, ka) for nomifensine. |
| PGx | Nomikos_1990 | not_relevant | 0 | 0 | The study reports in vivo pharmacology in rats (dose-response and TTX sensitivity) and does not investigate genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using rat brain tissue, not a pharmacokinetic study of nomifensine. |
| PD | Richfield_1991 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (Ki/IC50) for nomifensine, which is a pharmacological binding parameter, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system. |
| PGx | Richfield_1991 | not_relevant | 0 | 0 | The paper describes in vitro binding characteristics of the dopamine transporter and does not investigate any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nomifensine. |
| popPK | Riegert_2008 | irrelevant | 0 | 0 | The study is an in vitro neurochemical investigation where nomifensine is used as a tool compound to block dopamine uptake, not as a subject drug for pharmacokinetic characterization. |
| PD | Riegert_2008 | not_relevant | 0 | 0 | The paper investigates the effects of ethanol and MDMA on neurotransmitter release; nomifensine is used only as a tool compound to block reuptake, and no pharmacodynamic or exposure-response relationship for nomifensine is reported. |
| PGx | Riegert_2008 | not_relevant | 0 | 0 | The paper focuses on the interaction of ethanol and MDMA on neurotransmitter release and does not investigate the pharmacokinetic or pharmacodynamic effects of nomifensine, nor does it report pharmacogenomic data. |
| popPK | Saletu_1982 | relevant | 5 | 2 | The study reports pharmacokinetic data for nomifensine in humans but only provides an approximate elimination half-life (2 h) in the abstract, lacking specific clearance, volume, or rate constants. |
| PGx | Saletu_1982 | not_relevant | 0 | 0 | The study investigates pharmacokinetics and pharmacodynamics in healthy volunteers without examining genetic variants or pharmacogenomic factors. |
| popPK | Saletu_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic/pharmaco-EEG study where nomifensine is used only as a reference drug, and no PK parameters are reported. |
| PD | Saletu_1983 | not_relevant | 2 | 1 | The paper focuses on pirlindol and only provides qualitative comparisons and time-to-max-effect for nomifensine without numeric concentration-effect parameters or a formal PD model. |
| PGx | Saletu_1983 | not_relevant | 0 | 0 | The paper is a pharmacodynamic study of pirlindol in normal volunteers without any genetic or pharmacogenomic analysis. |
| popPK | Sallés_1993 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Sallés_1993 | not_relevant | 0 | 0 | The paper focuses on the modulation of alpha 1-adrenoceptors in rat vas deferens following chronic nomifensine treatment, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or numeric PD parameters (such as Emax or EC50) for nomifensine itself. |
| PGx | Sallés_1993 | not_relevant | 0 | 0 | The paper focuses on receptor modulation in rat vas deferens and does not involve nomifensine or human pharmacogenomics. |
| popPK | Salmon_1990 | relevant | 5 | 0 | The paper describes a two-compartment PK model for nomifensine in human PET studies, but the specific numeric parameter values (volumes of distribution, partition coefficients) are not present in the provided text evidence. |
| PGx | Salmon_1990 | not_relevant | 0 | 0 | The paper describes a kinetic modeling procedure for a PET tracer in Parkinson's disease patients but does not investigate pharmacogenomic effects. |
| popPK | Schiwy_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for brofaromine where nomifensine is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Schiwy_1989 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for brofaromine, not nomifensine, and nomifensine is only used as a fixed-dose comparator without specific PD parameter analysis. |
| PGx | Schiwy_1989 | not_relevant | 0 | 0 | The paper compares brofaromine to nomifensine but does not report any pharmacogenomic effects on nomifensine's PK or PD parameters. |
| popPK | Schoemaker_1985 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Schoemaker_1985 | not_relevant | 0 | 0 | The paper investigates cocaine binding in Parkinson's disease and does not report any pharmacodynamic or exposure-response data for nomifensine. |
| PGx | Schoemaker_1985 | not_relevant | 0 | 0 | The paper discusses cocaine binding and Parkinson's disease, but does not involve nomifensine or pharmacogenomics. |
| popPK | Sharif_1989 | irrelevant | 0 | 0 | The study reports in vitro binding affinity (Ki) values for nomifensine, not pharmacokinetic disposition parameters. |
| PD | Sharif_1989 | not_relevant | 3 | 4 | The paper reports in vitro binding affinity (Ki) and uptake inhibition (IC50) constants for nomifensine, which are pharmacological potency parameters, but it does not report an in vivo exposure-response or dose-response relationship (e.g., Emax, EC50, or effect vs. plasma concentration) for the drug. |
| PGx | Sharif_1989 | not_relevant | 0 | 0 | The paper describes in vitro binding affinities (Ki) of nomifensine to the dopamine transporter in different animal species, which does not constitute a pharmacogenomic effect on PK or PD parameters. |
| popPK | Sistovaris_1983 | relevant | 8 | 2 | The paper describes a PK study using compartmental models for nomifensine in humans, but the specific numeric parameter values are not listed in the provided text. |
| PGx | Sistovaris_1983 | not_relevant | 0 | 0 | The paper describes an analytical method for nomifensine and reports standard pharmacokinetic data without any mention of gene variants or genotypes. |
| popPK | Stauderman_1985 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of serotonin uptake inhibition in rat synaptosomes, not a pharmacokinetic study of nomifensine. |
| PGx | Stauderman_1985 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic potency (IC50) of nomifensine as an inhibitor of serotonin uptake in rat spinal cord synaptosomes, but it does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Strait_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tyrosine hydroxylase enzyme kinetics and dopamine autoreceptors, not a pharmacokinetic study of nomifensine. |
| PD | Strait_1986 | not_relevant | 1 | 1 | The paper reports IC50 values for dopamine and apomorphine in blocking tyrosine hydroxylase activation, but nomifensine is only used as a tool compound (MAO inhibitor) to prevent dopamine metabolism, not as the subject of a dose-response or exposure-response analysis. |
| PGx | Strait_1986 | not_relevant | 0 | 0 | The paper investigates dopamine autoreceptor regulation of tyrosine hydroxylase and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nomifensine. |
| popPK | Suarez-Roca_1987 | irrelevant | 0 | 0 | The study is an in-vitro neuropharmacology paper using brain slices, where nomifensine is used only as a tool compound to block dopamine uptake, not as the subject of PK analysis. |
| PD | Suarez-Roca_1987 | not_relevant | 2 | 1 | The paper mentions nomifensine only qualitatively as a tool to increase synaptic dopamine, without providing any specific concentration-effect data, dose-response curves, or numeric PD parameters for nomifensine itself. |
| PGx | Suarez-Roca_1987 | not_relevant | 0 | 0 | The paper is a neurophysiology study using nomifensine as a tool compound to block dopamine uptake in brain slices; it does not report pharmacogenomic effects or human PK/PD parameters. |
| popPK | Szász_2005 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of monoamine release in rat brain slices where nomifensine is used only as a functional uptake inhibitor (tool compound), not as the subject of pharmacokinetic analysis. |
| PD | Szász_2005 | not_relevant | 0 | 0 | The paper reports dose-response data for DMPP (the agonist), not nomifensine; nomifensine is used only as a qualitative inhibitor to distinguish release mechanisms. |
| PGx | Szász_2005 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of DMPP using nomifensine as a pharmacological tool to block dopamine uptake, but does not report any gene variant/genotype effects on nomifensine's pharmacokinetics or pharmacodynamics. |
| popPK | Taeuber_1979 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of acute effects and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for nomifensine. |
| PD | Taeuber_1979 | not_relevant | 2 | 1 | The study reports qualitative behavioral and physiological effects of fixed doses but does not provide plasma concentration data or numeric PD parameters (e.g., EC50, Emax) to establish an exposure-response relationship. |
| PGx | Taeuber_1979 | not_relevant | 0 | 0 | The paper describes a standard pharmacodynamic study in healthy volunteers with no mention of genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Tedroff_1990 | irrelevant | 1 | 0 | This is a PET imaging study quantifying receptor binding in the brain of patients with Parkinson's disease, not a population-pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for nomifensine. |
| PGx | Tedroff_1990 | not_relevant | 0 | 0 | The paper reports PET imaging kinetics in Parkinson's disease patients versus healthy controls, but does not investigate the influence of any gene variant or genotype on the pharmacokinetic or pharmacodynamic parameters of nomifensine. |
| popPK | Tong_2020 | irrelevant | 0 | 0 | The paper is a drug repositioning study focusing on molecular docking and cell viability (IC50) for NUDT5 inhibition, not a pharmacokinetic study reporting disposition parameters for nomifensine. |
| popPK | Trendelenburg_1994 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Trendelenburg_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of alpha 2A-adrenoceptors in rabbit brain slices and does not report any pharmacodynamic or exposure-response data for nomifensine. |
| PGx | Trendelenburg_1994 | not_relevant | 0 | 0 | The paper discusses presynaptic alpha 2A-adrenoceptors and dopamine release in rabbit caudate nucleus slices, with no mention of nomifensine or pharmacogenomic effects. |
| popPK | Wieczorek_1994 | irrelevant | 0 | 0 | no_text gate: only 211 chars of text extracted (&lt; 400) |
| PGx | Wieczorek_1994 | not_relevant | 0 | 0 | The paper studies the pharmacological interaction of nomifensine with cocaine and benztropine in rat brain slices, not the effect of a human gene variant on nomifensine's PK or PD parameters. |
| popPK | Yeghiayan_1997 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Yeghiayan_1997 | not_relevant | 0 | 0 | The paper investigates the role of dopamine in the behavioral effects of serotonin microinjected into the rat striatum and does not mention nomifensine or report any pharmacodynamic parameters for it. |
| PGx | Yeghiayan_1997 | not_relevant | 0 | 0 | The paper discusses dopamine's role in serotonin behavioral effects in rats and does not mention nomifensine or any pharmacogenomic analysis. |
| popPK | Yu_2010 | irrelevant | 1 | 0 | The study focuses on in vitro metabolism and bioactivation mechanisms (metabolite identification and phenotyping) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Yu_2010 | not_relevant | 0 | 0 | The paper reports in vitro reaction phenotyping and metabolite identification using cDNA-expressed enzymes and microsomes, but does not assess the effect of human gene variants on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnomifensine%5D&body=Drug%3A%20nomifensine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nomifensine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
