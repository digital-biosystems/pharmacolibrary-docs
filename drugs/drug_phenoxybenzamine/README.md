<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;phenoxybenzamine&quot;}]"></div>

# phenoxybenzamine

- **generic name:** phenoxybenzamine
- **ATC codes:** `C04AX02`
- **DrugBank:** [DB00925](https://go.drugbank.com/drugs/DB00925) · **PubChem:** [CID 4768](https://pubchem.ncbi.nlm.nih.gov/compound/4768)
- **molar mass:** 303.826 g/mol (C18H22ClNO) — DrugBank
- **groups:** approved, investigational

## About

**Description.** An alpha-adrenergic antagonist with long duration of action. It has been used to treat hypertension and as a peripheral vasodilator.

**Indication.** For the treatment of phaeochromocytoma (malignant), benign prostatic hypertrophy and malignant essential hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 16:28 | 41:04 | 0/0/0 | 0/0/0 | 0/0/0 | 97,871/7,236 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenoxybenzamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB2 (binder), CALM1 (inhibitor), DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 331 matched, 89 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bolger_1992.pdf` | Bolger GT et al., Characterization of intestinal smooth m…, Canadian journal of physiol… (1992) | pd | 5 | [10.1139/y92-047](https://doi.org/10.1139/y92-047) | [1318161](https://www.ncbi.nlm.nih.gov/pubmed/1318161) | metadata signals extractable PD data (IC50) |
| `Rhee_1998.pdf` | Rhee JW et al., Functional determination of oxytocin af…, European journal of pharmac… (1998) | pd | 5 | [10.1016/s0014-2999(98)00504-4](https://doi.org/10.1016/s0014-2999(98)00504-4) | [9761418](https://www.ncbi.nlm.nih.gov/pubmed/9761418) | metadata signals extractable PD data (EMAX) |
| `Yin_2018.pdf` | Yin A et al., Quantitative systems pharmacology analy…, British journal of pharmaco… (2018) | pd | 5 | [10.1111/bph.14385](https://doi.org/10.1111/bph.14385) | [29859008](https://www.ncbi.nlm.nih.gov/pubmed/29859008) | metadata signals extractable PD data (exposure-response) |
| `Claro_1987.pdf` | Claro E et al., Histamine-stimulated phosphoinositide h…, Molecular pharmacology (1987) | pd | 4 | not captured | [2823091](https://www.ncbi.nlm.nih.gov/pubmed/2823091) | metadata signals extractable PD data (concentration-effect) |
| `Dantas_2014.pdf` | Dantas da Silva Júnior E et al., Effects of clonidine in the isolated ra…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.01.027](https://doi.org/10.1016/j.ejphar.2014.01.027) | [24485887](https://www.ncbi.nlm.nih.gov/pubmed/24485887) | metadata signals extractable PD data (Emax) |
| `Deighton_1992.pdf` | Deighton NM et al., Characterization of the beta adrenocept…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1354251](https://www.ncbi.nlm.nih.gov/pubmed/1354251) | metadata signals extractable PD data (Emax) |
| `Elliott_1997.pdf` | Elliott J, Alpha-adrenoceptors in equine digital v…, Journal of veterinary pharm… (1997) | pd | 4 | [10.1046/j.1365-2885.1997.00078.x](https://doi.org/10.1046/j.1365-2885.1997.00078.x) | [9280371](https://www.ncbi.nlm.nih.gov/pubmed/9280371) | metadata signals extractable PD data (EC50) |
| `Gardiner_1988.pdf` | Gardiner PJ et al., Characterisation of the leukotriene rec…, Agents and actions. Supplem… (1988) | pd | 4 | [10.1007/978-3-0348-9156-1_8](https://doi.org/10.1007/978-3-0348-9156-1_8) | [2845748](https://www.ncbi.nlm.nih.gov/pubmed/2845748) | metadata signals extractable PD data (EC50) |
| `Germann_1994.pdf` | Germann P et al., Barbiturate attenuation of agonist affi…, Canadian journal of physiol… (1994) | pd | 4 | [10.1139/y94-134](https://doi.org/10.1139/y94-134) | [7842394](https://www.ncbi.nlm.nih.gov/pubmed/7842394) | metadata signals extractable PD data (EC50) |
| `Hamilton_1982.pdf` | Hamilton C et al., Recovery in vivo and in vitro of alpha-…, Journal of cardiovascular p… (1982) | pd | 4 | [10.1097/00005344-198200041-00025](https://doi.org/10.1097/00005344-198200041-00025) | [6175825](https://www.ncbi.nlm.nih.gov/pubmed/6175825) | metadata signals extractable PD data (EC50) |
| `Hamilton_1984.pdf` | Hamilton CA et al., The recovery of alpha-adrenoceptor func…, Naunyn-Schmiedeberg's archi… (1984) | pd | 4 | [10.1007/BF00507051](https://doi.org/10.1007/BF00507051) | [6324006](https://www.ncbi.nlm.nih.gov/pubmed/6324006) | metadata signals extractable PD data (EC50) |
| `Medhurst_1997.pdf` | Medhurst AD et al., Characterization of NK3 receptors in ra…, British journal of pharmaco… (1997) | pd | 4 | [10.1038/sj.bjp.0700867](https://doi.org/10.1038/sj.bjp.0700867) | [9117105](https://www.ncbi.nlm.nih.gov/pubmed/9117105) | metadata signals extractable PD data (concentration-effect) |
| `Meller_1992.pdf` | Meller E et al., Comparative effects of receptor inactiv…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1359107](https://www.ncbi.nlm.nih.gov/pubmed/1359107) | metadata signals extractable PD data (EC50) |
| `Oridupa_2020.pdf` | Oridupa OA et al., Persea Americana Seeds Cause Ileal Smoo…, Drug research (2020) | pd | 4 | [10.1055/a-1076-0703](https://doi.org/10.1055/a-1076-0703) | [31896158](https://www.ncbi.nlm.nih.gov/pubmed/31896158) | metadata signals extractable PD data (EC50) |
| `Powis_1987.pdf` | Powis DA, Alpha 2-adrenoceptor blockade prevents…, British journal of pharmaco… (1987) | pd | 4 | [10.1111/j.1476-5381.1987.tb11314.x](https://doi.org/10.1111/j.1476-5381.1987.tb11314.x) | [2889493](https://www.ncbi.nlm.nih.gov/pubmed/2889493) | metadata signals extractable PD data (EC50) |
| `Savino_1999.pdf` | Savino EA et al., Influence of moderate cooling (37 degre…, Acta physiologica, pharmaco… (1999) | pd | 4 | not captured | [10797852](https://www.ncbi.nlm.nih.gov/pubmed/10797852) | metadata signals extractable PD data (concentration-effect) |
| `Sharif_1994.pdf` | Sharif SI, Dopamine contracts the rat isolated sem…, Pharmacology (1994) | pd | 4 | [10.1159/000139196](https://doi.org/10.1159/000139196) | [7912441](https://www.ncbi.nlm.nih.gov/pubmed/7912441) | metadata signals extractable PD data (EC50) |
| `Svoboda_1986.pdf` | Svoboda P et al., Effect of catecholamines and metal chel…, Comparative biochemistry an… (1986) | pd | 4 | [10.1016/0742-8413(86)90095-2](https://doi.org/10.1016/0742-8413(86)90095-2) | [2874945](https://www.ncbi.nlm.nih.gov/pubmed/2874945) | metadata signals extractable PD data (EC50) |
| `Trendelenburg_1993.pdf` | Trendelenburg AU et al., Presynaptic alpha 2-autoreceptors in br…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00168534](https://doi.org/10.1007/BF00168534) | [8397342](https://www.ncbi.nlm.nih.gov/pubmed/8397342) | metadata signals extractable PD data (EC50) |
| `Vayssette_1986.pdf` | Vayssette J et al., Dopamine receptors in pancreatic acinar…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90412-7](https://doi.org/10.1016/0014-2999(86)90412-7) | [2872068](https://www.ncbi.nlm.nih.gov/pubmed/2872068) | metadata signals extractable PD data (EC50) |
| `Ma_2024.pdf` | Ma Q et al., Exploring the impact of Cyp2C19 genetic…, Minerva medica (2024) | pgx | 5 | [10.23736/S0026-4806.24.09294-2](https://doi.org/10.23736/S0026-4806.24.09294-2) | [39078202](https://www.ncbi.nlm.nih.gov/pubmed/39078202) | metadata signals extractable PGX data (Cyp2C19) |

<sub>queue written 2026-09-28T16:20:27.761014+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abel_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and contraction, not a pharmacokinetic study, and phenoxybenzamine is used only as a tool compound to inactivate receptors. |
| PD | Abel_1986 | not_relevant | 3 | 2 | The paper reports a qualitative observation that phenoxybenzamine decreases potency and maximal response, but does not provide numeric PD parameters (e.g., Emax, EC50 shift, or specific inhibition constants) for phenoxybenzamine itself. |
| popPK | Adegunloye_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin responses in rat arteries where phenoxybenzamine is used only as a non-selective alpha-adrenergic blocker, with no pharmacokinetic parameters reported. |
| PD | Adegunloye_1997 | not_relevant | 1 | 0 | The paper reports EC50 values for serotonin, not phenoxybenzamine, and only provides a qualitative description of phenoxybenzamine's effect without numeric PD parameters. |
| popPK | Al-Humayyd_1985 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on ATP release where phenoxybenzamine is used only as an ineffective pharmacological probe, with no pharmacokinetic parameters reported. |
| PD | Al-Humayyd_1985 | not_relevant | 0 | 0 | The paper reports that phenoxybenzamine was ineffective at blocking 5-HT-induced ATP release, but it does not provide a dose-response curve, Emax, or any numeric PD parameters for phenoxybenzamine. |
| PD | Babich_1987 | not_relevant | 3 | 2 | The paper uses phenoxybenzamine as a tool to characterize receptor subtypes via occupancy-response curves and binding affinities, but does not report a pharmacodynamic exposure-response model or numeric PD parameters (like Emax/EC50) for phenoxybenzamine itself. |
| PD | Barthelmebs_1991 | not_relevant | 0 | 0 | The study investigates the PD of bromocriptine (a D2 agonist), using phenoxybenzamine only as a fixed-dose adrenergic blocker to establish baseline tone, rather than analyzing the exposure-response relationship of phenoxybenzamine itself. |
| PD | Bolger_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacology of endothelin-1; phenoxybenzamine is only mentioned as a non-specific antagonist used to rule out receptor involvement, with no dose-response or PD parameters reported for it. |
| PD | Bult_1976 | not_relevant | 1 | 0 | The paper uses phenoxybenzamine only as a qualitative pharmacological antagonist to block alpha-adrenergic responses in a bioassay, without reporting any numeric dose-response or concentration-effect parameters for the drug itself. |
| popPK | Campos_2020 | irrelevant | 0 | 0 | The study is a pharmacological investigation of aortic contractions in turtles where phenoxybenzamine is used as a pharmacological tool, not a pharmacokinetic study reporting disposition parameters. |
| PD | Campos_2020 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent inhibition of EFS-induced contractions by phenoxybenzamine (76% at 1 uM, 90% at 10 uM) but does not provide a formal PD model, Emax/EC50 parameters for the drug, or a concentration-effect curve for phenoxybenzamine itself. |
| PD | Ceballos_1990 | not_relevant | 1 | 0 | The paper uses phenoxybenzamine as a pharmacological tool to block alpha-adrenergic receptors, but does not report a PD or exposure-response relationship for phenoxybenzamine itself. |
| PD | Ciccone_1983 | not_relevant | 2 | 1 | The paper reports a qualitative effect of a single fixed dose (1 mg/kg) on blood pressure and qualitative dose-response curves for exogenous agonists, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship for phenoxybenzamine. |
| PD | Clark_1989 | not_relevant | 0 | 0 | The paper investigates the PD of dopamine and modulators (IBMX/forskolin), using phenoxybenzamine only as a blocking agent; it does not report a PD or exposure-response relationship for phenoxybenzamine itself. |
| popPK | Claro_1986 | irrelevant | 0 | 0 | The study is a mechanistic receptor binding/pharmacology experiment using phenoxybenzamine as a tool compound, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Claro_1987 | irrelevant | 0 | 0 | The paper is a mechanistic study on histamine receptor development in rat brain where phenoxybenzamine is used only as a pharmacological tool, with no pharmacokinetic parameters reported. |
| PD | Claro_1987 | not_relevant | 1 | 1 | The paper reports PD parameters (EC50, Emax) for histamine, but phenoxybenzamine is used only as a qualitative irreversible antagonist to characterize receptor subtypes, with no exposure-response or dose-response relationship reported for phenoxybenzamine itself. |
| PD | Cook_1988 | not_relevant | 3 | 1 | The paper describes qualitative receptor protection and parallel shifts in dose-response curves but does not provide numeric PD parameters (e.g., pA2, Ki, Emax, EC50) or extractable concentration-effect data for phenoxybenzamine. |
| popPK | Daniel_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenoceptor subtypes in canine mesenteric artery, not a pharmacokinetic study, and phenoxybenzamine is used only as a pharmacological tool. |
| PD | Daniel_1999 | not_relevant | 3 | 2 | The paper reports qualitative changes in EC50 and Emax for phenoxybenzamine in an in vitro receptor study, but does not provide a quantitative exposure-response model or specific numeric PD parameters for the drug itself. |
| popPK | Dantas_2014 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Dantas_2014 | not_relevant | 0 | 0 | The paper investigates the effects of clonidine, not phenoxybenzamine. |
| PD | Davies_2000 | not_relevant | 1 | 0 | The paper uses phenoxybenzamine as a pharmacological tool to characterize dopamine responses in vessels, but does not report a PD or exposure-response relationship for phenoxybenzamine itself. |
| PD | Davis_1987 | not_relevant | 0 | 0 | The paper uses phenoxybenzamine only as a qualitative neuronal uptake blocker in structural/functional assays and does not report any concentration-effect or dose-response data for the drug itself. |
| PD | Deighton_1992 | not_relevant | 0 | 0 | The paper focuses on beta-adrenoceptor subtypes for other drugs (epinine, dopamine, etc.) and does not report any pharmacodynamic or exposure-response data for phenoxybenzamine. |
| popPK | Eckert_1976 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline uptake in rabbit aortic strips where phenoxybenzamine is used as a tool compound, not as the subject drug for PK parameter estimation. |
| PD | Edosuyi_2017 | not_relevant | 0 | 0 | Phenoxybenzamine is used only as a pharmacological antagonist to probe the mechanism of action of the plant extract, not as the subject of a PD or exposure-response analysis. |
| popPK | Elliott_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenoceptors in equine veins where phenoxybenzamine is used only as a tool compound for receptor inactivation, not as a subject drug for PK analysis. |
| PD | Elliott_1997 | not_relevant | 0 | 0 | The paper uses phenoxybenzamine as a pharmacological tool to characterize adrenoceptor subtypes in equine veins, but does not report a pharmacodynamic exposure-response or dose-response relationship for phenoxybenzamine itself. |
| PD | Eltze_1989 | not_relevant | 0 | 0 | The paper reports pharmacological data for glibenclamide, cromakalim, pinacidil, RP 49356, and nicorandil; phenoxybenzamine is only mentioned as a pretreatment for the tissue preparation and has no associated PD parameters or exposure-response analysis. |
| PD | Ethier_1996 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor reserve and carbachol dose-response; phenoxybenzamine is used only as a tool to inactivate receptors, and no exposure-response or PD parameters for phenoxybenzamine itself are reported. |
| PD | Ferguson_1984 | not_relevant | 0 | 0 | The paper uses phenoxybenzamine only as a qualitative antagonist to rule out indirect mechanisms; it does not report any exposure-response or dose-response relationship or numeric PD parameters for phenoxybenzamine. |
| PD | Friedman_2009 | not_relevant | 0 | 0 | The paper is an epidemiological study evaluating carcinogenicity risk using odds ratios and does not report any pharmacodynamic, exposure-response, or dose-response parameters for phenoxybenzamine. |
| popPK | Gardiner_1988 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Gardiner_1988 | not_relevant | 0 | 0 | The paper characterizes leukotriene receptors on lung strips and does not report any pharmacodynamic or exposure-response data for phenoxybenzamine. |
| PD | Germann_1994 | not_relevant | 0 | 0 | The paper investigates the effect of barbiturates on histamine receptor affinity using phenoxybenzamine only as a fixed tool compound for Furchgott analysis, and does not report a pharmacodynamic or exposure-response relationship for phenoxybenzamine itself. |
| popPK | Hall_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor antagonism and does not report pharmacokinetic disposition parameters for phenoxybenzamine. |
| popPK | Hamilton_1982 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Hamilton_1984 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Hamilton_1984 | not_relevant | 0 | 0 | The paper focuses on receptor turnover and binding site recovery kinetics rather than a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Holck_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenoceptor reserve in isolated aortas, not a pharmacokinetic study, and phenoxybenzamine is used only as a tool compound. |
| PD | Holck_1988 | not_relevant | 1 | 1 | The paper investigates alpha-1 adrenoceptor reserve and the effect of a calcium channel blocker, using phenoxybenzamine only as a qualitative tool to deplete receptors; it does not report a pharmacodynamic exposure-response or dose-response relationship for phenoxybenzamine itself. |
| PD | Kapás_1987 | not_relevant | 1 | 0 | The paper reports a dose-response relationship for CCK-8, not phenoxybenzamine; phenoxybenzamine is only mentioned qualitatively as a pretreatment that attenuated the CCK-8 effect. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of Akrinor, using phenoxybenzamine only as a tool compound to block alpha-adrenoceptors, and reports no pharmacokinetic parameters for phenoxybenzamine. |
| PD | Kloth_2017 | not_relevant | 0 | 0 | The paper investigates the PD of Akrinor (cafedrine/theodrenaline), using phenoxybenzamine only as a tool to block indirect sympathomimetic effects, and does not report a PD relationship or numeric parameters for phenoxybenzamine itself. |
| PD | Le_1994 | not_relevant | 0 | 0 | The paper reports that phenoxybenzamine showed no protective activity against veratrine-contractures at 10 microM, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Low_1999 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of alpha-adrenoceptor subtypes in dog saphenous vein, not a pharmacokinetic study, and reports no disposition parameters for phenoxybenzamine. |
| PGx | Ma_2024 | not_relevant | 0 | 0 | The paper studies dibenzyline, not phenoxybenzamine. |
| PD | MacLennan_1997 | not_relevant | 0 | 0 | Phenoxybenzamine is used solely as a tool compound to inactivate alpha-1 receptors, and no exposure-response or dose-response relationship for phenoxybenzamine itself is reported. |
| PD | Medhurst_1997 | not_relevant | 0 | 0 | The paper characterizes NK3 receptors in rabbit iris sphincter muscle and does not mention phenoxybenzamine or report any exposure-response or dose-response data for it. |
| popPK | Meller_2000 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro receptor binding assay where phenoxybenzamine is used as a tool compound for irreversible receptor inactivation, not as a subject drug for pharmacokinetic analysis. |
| PD | Meller_2000 | not_relevant | 2 | 1 | The paper uses phenoxybenzamine as a tool compound for receptor inactivation to study 5-HT1A receptor coupling, rather than reporting a pharmacodynamic exposure-response relationship for phenoxybenzamine itself. |
| popPK | Minneman_1983 | irrelevant | 0 | 0 | The study is a receptor binding assay in rat cerebral cortex where phenoxybenzamine is used as a tool compound to characterize alpha-1 receptors, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Murithi_2021 | irrelevant | 0 | 0 | The paper studies the antimalarial drug MMV688533, not phenoxybenzamine. |
| PD | Murithi_2021 | not_relevant | 0 | 0 | The paper discusses the antimalarial MMV688533, not phenoxybenzamine, and does not report specific numeric PD parameters for the target drug. |
| PD | Nyborg_1990 | not_relevant | 0 | 0 | The paper reports PD parameters for thrombin, but explicitly states that phenoxybenzamine had no effect on the response, providing no exposure-response or dose-response relationship for phenoxybenzamine itself. |
| popPK | Onaran_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor kinetics in isolated rabbit arteries, not a pharmacokinetic study reporting disposition parameters for phenoxybenzamine. |
| popPK | Oridupa_2020 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Oridupa_2020 | not_relevant | 0 | 0 | The paper focuses on Persea Americana seeds and alpha-1 adrenoceptors, with no mention of phenoxybenzamine or its pharmacodynamic parameters. |
| popPK | Othman_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linagliptin and cefixime, not phenoxybenzamine. |
| PD | Othman_2026 | not_relevant | 0 | 0 | The paper focuses on the development of an HPLC method for linagliptin and cefixime and reports only pharmacokinetic parameters (Cmax, AUC) and drug-drug interactions, with no mention of phenoxybenzamine or any pharmacodynamic modeling. |
| popPK | Paiva_1984 | irrelevant | 0 | 0 | The study focuses on the metabolism of 5-hydroxytryptamine in isolated dog veins, with phenoxybenzamine used only as a pharmacological tool, and no PK parameters for phenoxybenzamine are reported. |
| popPK | Powis_1987 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Powis_1987 | not_relevant | 0 | 0 | The paper focuses on alpha-2 adrenoceptor blockade and cardiac glycosides in dog saphenous vein, with no mention of phenoxybenzamine or its pharmacodynamic parameters. |
| PD | Pranzatelli_1990 | not_relevant | 0 | 0 | The paper focuses on the behavioral effects of DOI and uses phenoxybenzamine only as a qualitative antagonist to block specific behaviors, without reporting any numeric dose-response or concentration-effect parameters for phenoxybenzamine itself. |
| popPK | Rhee_1998 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Rhee_1998 | not_relevant | 0 | 0 | The paper investigates oxytocin affinity in rat myometrium and does not mention phenoxybenzamine or report any pharmacodynamic parameters for it. |
| PD | Sabra_2000 | not_relevant | 2 | 1 | The paper describes qualitative shifts in dose-response curves (left shift, increased max) for noradrenaline in the presence of cocaine and phenoxybenzamine, but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data for phenoxybenzamine itself. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine effects on carotid bodies where phenoxybenzamine is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Sanders-Bush_1990 | irrelevant | 0 | 0 | The paper is a receptor pharmacology study investigating serotonin receptor reserve, and phenoxybenzamine is used only as a tool compound for receptor inactivation, not as a subject for pharmacokinetic analysis. |
| popPK | Savino_1999 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Savino_1999 | not_relevant | 0 | 0 | The paper investigates the effect of temperature on isolated rat tail artery reactivity and does not mention phenoxybenzamine or report any drug-specific pharmacodynamic parameters. |
| PD | Schwartz_1990 | not_relevant | 0 | 0 | The paper reports an EC50 for isoproterenol, not phenoxybenzamine, and only qualitatively states that phenoxybenzamine does not block the effect, providing no numeric PD parameters for the target drug. |
| popPK | Sharif_1994 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Sladeczek_1988 | not_relevant | 1 | 0 | The paper reports a single qualitative observation of irreversible blockade by phenoxybenzamine (46% binding, 57% effect reduction) to demonstrate receptor coupling, but does not provide a dose-response curve, Emax, or other numeric PD parameters for phenoxybenzamine. |
| PGx | Song_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of metformin transport via OCT2 variants, and phenoxybenzamine is only mentioned as a non-specific inhibitor used to characterize the transporter, not as the drug of interest. |
| popPK | Svoboda_1986 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Svoboda_1986 | not_relevant | 0 | 0 | The paper investigates the effect of catecholamines and metal chelating agents on Na,K-ATPase and does not mention phenoxybenzamine or report any exposure-response or dose-response data for it. |
| popPK | Tabernero_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-1 adrenoceptor function where phenoxybenzamine is used only as a tool compound for receptor alkylation, not as a subject for pharmacokinetic analysis. |
| PD | Tabrizchi_1992 | not_relevant | 4 | 2 | The paper describes dose-dependent shifts in the cirazoline dose-response curve following phenoxybenzamine administration, but the provided text lacks specific numeric PD parameters (e.g., EC50, Emax values) or data points to derive a quantitative exposure-response relationship. |
| popPK | Tayo_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of diuretics on rat portal veins where phenoxybenzamine is used only as a mechanistic antagonist, with no pharmacokinetic parameters reported. |
| PD | Tayo_1984 | not_relevant | 1 | 0 | The paper mentions phenoxybenzamine only qualitatively as a blocker of frusemide-induced contractions in WKY rats, without providing any numeric PD parameters or concentration-effect data for phenoxybenzamine itself. |
| popPK | Thurman_1990 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper on sodium transport in Necturus bladder where phenoxybenzamine is used only as a pharmacological antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Thurman_1990 | not_relevant | 1 | 0 | The paper reports an EC50 for norepinephrine, not phenoxybenzamine, and only qualitatively mentions phenoxybenzamine as a selective antagonist without providing numeric dose-response parameters for it. |
| popPK | Topouzis_1991 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of endothelial function in rat aorta where phenoxybenzamine is used only as a tool for receptor alkylation, not as a subject for pharmacokinetic analysis. |
| PD | Topouzis_1991 | not_relevant | 1 | 0 | The paper investigates the mechanism of endothelial inhibition on alpha-adrenoceptor agonists; phenoxybenzamine is used only as a tool for receptor alkylation, and no exposure-response or dose-response PD parameters for phenoxybenzamine itself are reported. |
| PD | Trendelenburg_1993 | not_relevant | 0 | 0 | The paper uses phenoxybenzamine only as a tool for irreversible receptor blockade to calculate agonist affinity (KA); it does not report a pharmacodynamic exposure-response or dose-response relationship for phenoxybenzamine itself. |
| PD | Tsushima_1997 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for DAMGO, not phenoxybenzamine; phenoxybenzamine is only used as a negative control antagonist without any PD parameter estimation. |
| popPK | Upton_2014 | irrelevant | 0 | 0 | The paper is a review on pharmacodynamic modeling methods and does not report pharmacokinetic parameters for phenoxybenzamine. |
| PD | Upton_2014 | not_relevant | 1 | 0 | The paper is a methodological review introducing population PD modeling concepts and does not report specific numeric PD parameters or exposure-response data for phenoxybenzamine. |
| popPK | Van_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors in mouse trachea where phenoxybenzamine is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Van_1991 | not_relevant | 0 | 0 | The paper reports PD parameters for 5-HT, not phenoxybenzamine; phenoxybenzamine is used only as a tool compound to test receptor involvement. |
| PD | Van_1997 | not_relevant | 4 | 2 | The paper discusses the reliability of fitting methods using phenoxybenzamine data but does not report specific numeric PD parameters (like Ki or efficacy) in the provided text, focusing instead on the statistical limitations of the simultaneous fitting approach. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Vayssette_1986 | not_relevant | 0 | 0 | The paper focuses on dopamine receptors in pancreatic acinar cells and does not mention phenoxybenzamine or report any exposure-response or dose-response data for it. |
| popPK | Watts_1996 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptor signal transduction in isolated tissues, using phenoxybenzamine only as a diagnostic antagonist, and contains no pharmacokinetic parameters. |
| PD | Watts_1996 | not_relevant | 1 | 0 | The paper mentions phenoxybenzamine only to qualitatively state that the 5-HT2B receptor is insensitive to it at 10-300 nM, without providing numeric PD parameters or a concentration-effect curve for phenoxybenzamine. |
| popPK | Weetman_1983 | irrelevant | 0 | 0 | The paper is a pharmacological study on a sympathomimetic agent (Sgd 101/75) where phenoxybenzamine is used only as a tool compound to identify receptor subtypes, with no pharmacokinetic parameters reported. |
| PD | Weetman_1983 | not_relevant | 2 | 1 | The paper focuses on the pharmacology of Sgd 101/75; phenoxybenzamine is used only as a qualitative tool to distinguish receptor subtypes, with no exposure-response or dose-response analysis for phenoxybenzamine itself. |
| popPK | Yin_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology analysis of vasoconstriction where phenoxybenzamine is used as a tool compound, not a PK study reporting disposition parameters. |
| PD | Yin_2018 | not_relevant | 0 | 0 | The paper focuses on the interaction between noradrenaline and vasopressin, not phenoxybenzamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
