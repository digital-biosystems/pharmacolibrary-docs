<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;iloprost&quot;}]"></div>

# iloprost

- **generic name:** iloprost
- **ATC codes:** `B01AC11`
- **DrugBank:** [DB01088](https://go.drugbank.com/drugs/DB01088) · **PubChem:** [CID 5311181](https://pubchem.ncbi.nlm.nih.gov/compound/5311181)
- **molar mass:** 360.494 g/mol (C22H32O4) — DrugBank
- **groups:** approved, investigational

## About

Iloprost is a vasodilator and platelet aggregation inhibitor used to treat pulmonary hypertension and chronic pulmonary heart disease. It is approved and authorised in the European Union for pulmonary hypertension, though its use remains limited to this specialised indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817139](https://www.wikidata.org/wiki/Q20817139) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:23 | 4:18 | 0/0/0 | 0/1/3 | 0/0/0 | 174,506/5,209 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 7/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Bassiouni_2019_relaxation_of_PE_precontracted_strips](drugs/drug_iloprost/pd_Bassiouni_2019_relaxation_of_PE_precontracted_strips.md) | relaxation of PE-precontracted strips ← iloprost · direct Emax (saturable) effect | — | Bassiouni W et al., Evaluation of some prostaglandins modul…, Biomedicine & pharmacothera… (2019) | [10.1016/j.biopha.2018.12.097](https://doi.org/10.1016/j.biopha.2018.12.097) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Norel_1999_relaxation_of_histamine_contracted_human_bronchial_preparations](drugs/drug_iloprost/pd_Norel_1999_relaxation_of_histamine_contracted_human_bronchia.md) | relaxation of histamine-contracted human bronchial preparations ← iloprost · direct Emax (saturable) effect | — | Norel X et al., Prostanoid receptors involved in the re…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702392](https://doi.org/10.1038/sj.bjp.0702392) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Serbest_2007_isometric_tension](drugs/drug_iloprost/pd_Serbest_2007_isometric_tension.md) | isometric tension ← iloprost · direct sigmoid Emax (Hill) effect | — | Serbest MO et al., Vasorelaxant effect of iloprost on isol…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2006.00456.x](https://doi.org/10.1111/j.1472-8206.2006.00456.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Wahl_1989_vascular_diameter](drugs/drug_iloprost/pd_Wahl_1989_vascular_diameter.md) | vascular diameter ← iloprost · direct Emax (saturable) effect | — | Wahl M et al., Cerebrovascular effects of prostanoids.…, Naunyn-Schmiedeberg's archi… (1989) | [10.1007/BF00168516](https://doi.org/10.1007/BF00168516) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iloprost) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PDE4A (inducer), PDE4B (inducer), PDE4C (inducer), PDE4D (inducer), PLAT (other/unknown), PTGDR2 (target), PTGER1 (target), PTGER2 (target), PTGIR (target), SLCO2A1 (substrate), SLCO3A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 242 matched, 73 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baxter_1995.pdf` | Baxter GS et al., Characterization of the prostanoid rece…, British journal of pharmaco… (1995) | pd | 5 | [10.1111/j.1476-5381.1995.tb16393.x](https://doi.org/10.1111/j.1476-5381.1995.tb16393.x) | [8564239](https://www.ncbi.nlm.nih.gov/pubmed/8564239) | metadata signals extractable PD data (EC50) |
| `Bek_1999.pdf` | Bek M et al., Characterization of prostanoid receptor…, Journal of the American Soc… (1999) | pd | 5 | [10.1681/ASN.V10102084](https://doi.org/10.1681/ASN.V10102084) | [10505684](https://www.ncbi.nlm.nih.gov/pubmed/10505684) | metadata signals extractable PD data (EC50) |
| `Adam_1994.pdf` | Adam M et al., Cloning and expression of three isoform…, FEBS letters (1994) | pd | 4 | [10.1016/0014-5793(94)80358-7](https://doi.org/10.1016/0014-5793(94)80358-7) | [8307176](https://www.ncbi.nlm.nih.gov/pubmed/8307176) | metadata signals extractable PD data (IC50) |
| `Crider_2001.pdf` | Crider JY et al., Pharmacology of functional endogenous I…, Prostaglandins, leukotriene… (2001) | pd | 4 | [10.1054/plef.2001.0322](https://doi.org/10.1054/plef.2001.0322) | [11993717](https://www.ncbi.nlm.nih.gov/pubmed/11993717) | metadata signals extractable PD data (EC50) |
| `Griffin_1997.pdf` | Griffin BW et al., FP prostaglandin receptors mediating in…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9152393](https://www.ncbi.nlm.nih.gov/pubmed/9152393) | metadata signals extractable PD data (EC50) |
| `Kan_2004.pdf` | Kan KK et al., Excitatory action of prostanoids on the…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.02.058](https://doi.org/10.1016/j.ejphar.2004.02.058) | [15102531](https://www.ncbi.nlm.nih.gov/pubmed/15102531) | metadata signals extractable PD data (EC50) |
| `Seiler_1997.pdf` | Seiler SM et al., [3-[4-(4,5-Diphenyl-2-oxazolyl)-5-oxazo…, Prostaglandins (1997) | pd | 4 | [10.1016/s0090-6980(96)00138-4](https://doi.org/10.1016/s0090-6980(96)00138-4) | [9068064](https://www.ncbi.nlm.nih.gov/pubmed/9068064) | metadata signals extractable PD data (IC50) |
| `Tanaka_1995.pdf` | Tanaka M et al., Binding affinities of isocarbacyclin me…, Arzneimittel-Forschung (1995) | pd | 4 | not captured | [7488314](https://www.ncbi.nlm.nih.gov/pubmed/7488314) | metadata signals extractable PD data (IC50) |
| `Wahl_1989.pdf` | Wahl M et al., Cerebrovascular effects of prostanoids.…, Naunyn-Schmiedeberg's archi… (1989) | pd | 4 | [10.1007/BF00168516](https://doi.org/10.1007/BF00168516) | [2812043](https://www.ncbi.nlm.nih.gov/pubmed/2812043) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T16:20:48.229873+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adam_1994 | not_relevant | 1 | 1 | The paper reports in vitro receptor binding affinities (IC50) for iloprost on cloned EP3 receptors, which is a pharmacological binding study, not a pharmacodynamic exposure-response or dose-response analysis in a biological system. |
| popPK | Arner_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and does not report pharmacokinetic parameters for iloprost. |
| popPK | Axelsen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of selexipag and its metabolite, not iloprost. |
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction study for selexipag (not iloprost) and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Bassiouni_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of iloprost's relaxant effects on rat corpus cavernosum, reporting pEC50 and Emax values rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Baxter_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of prostanoid receptors in human uterine artery, reporting potency (EC50) and receptor subtypes, but containing no pharmacokinetic disposition parameters (CL, V, t1/2) for iloprost. |
| popPK | Bek_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prostanoid receptor effects on podocytes, not a pharmacokinetic study of iloprost. |
| PD | Bek_1999 | not_relevant | 2 | 1 | The paper reports that iloprost is 100-1000 times less potent than PGE2 but does not provide specific numeric PD parameters (EC50, Emax) or a concentration-effect curve for iloprost itself. |
| PD | Briand_2019 | not_relevant | 0 | 0 | The paper reports an in vitro enzyme inhibition IC50 for iloprost against CES1, which is a pharmacokinetic/metabolic parameter, not a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for iloprost. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for iloprost. |
| popPK | Crider_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of DP receptors in bovine cells, not a pharmacokinetic study of iloprost. |
| PD | Crider_1999 | not_relevant | 2 | 0 | The paper characterizes DP receptor pharmacology in cell lines and explicitly states that iloprost was a weak or inactive agonist, providing no numeric PD parameters or exposure-response relationship for iloprost. |
| popPK | Crider_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of receptor binding and functional potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dumas_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vasoconstriction in an isolated rat lung preparation and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Feoktistov_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of prostanoid receptors in cell lines, reporting no pharmacokinetic parameters for iloprost. |
| PD | Galiè_2003 | not_relevant | 1 | 0 | The text is a qualitative review of prostanoids in PAH and mentions iloprost's clinical effects but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/pharmacodynamic analysis of selexipag's metabolite, using iloprost only as a comparator agent, and reports no pharmacokinetic parameters for iloprost. |
| popPK | Griffin_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of FP receptors in mouse cells where iloprost is identified as an inactive compound, containing no pharmacokinetic parameters. |
| PD | Griffin_1997 | not_relevant | 0 | 0 | The paper reports that iloprost is inactive in the assay and provides no numeric PD parameters (EC50, Emax, etc.) for it. |
| popPK | Growcott_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PDE4 expression and anti-proliferative effects in human pulmonary artery smooth muscle cells, reporting no pharmacokinetic parameters for iloprost. |
| popPK | Hashimoto_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and mechanistic study, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Hildebrand_1991 | not_relevant | 0 | 0 | The paper describes formulation development and PK in a pig model, with no mention of genetic variants or pharmacogenomics. |
| popPK | Hildebrand_1994 | irrelevant | 2 | 0 | The paper is a review/analysis of inter-species extrapolation principles and does not provide specific numeric PK parameter values for iloprost in the evidence. |
| popPK | Hornberger_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of eicosanoid release in platelets where iloprost is used only as a functional antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Hornberger_1989 | not_relevant | 0 | 0 | The paper studies platelet biochemistry and mentions iloprost only as a functional antagonist to prevent platelet activation, without reporting any exposure-response or dose-response PD parameters for iloprost itself. |
| popPK | Jensen_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor subtypes on rabbit aorta, not a pharmacokinetic study of iloprost. |
| popPK | Kan_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid receptor agonists on ferret vagus nerves, not a pharmacokinetic study of iloprost. |
| PD | Kan_2004 | not_relevant | 1 | 0 | The paper reports only a qualitative finding that iloprost had minimal effects, without providing any numeric PD parameters or concentration-effect data for iloprost. |
| PD | Kecskér_1993 | not_relevant | 3 | 2 | The paper describes qualitative dose-dependent effects (erythema, edema) and threshold doses but does not provide a quantitative concentration-effect curve or numeric PD parameters like Emax or EC50. |
| PD | Li_2017 | not_relevant | 1 | 0 | The text only qualitatively mentions that iloprost reduces platelet deposition in a microfluidic assay, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| PD | Lindegaard_2020 | not_relevant | 1 | 0 | The text is a review of treprostinil and only mentions iloprost as a comparator without providing any specific pharmacodynamic data or exposure-response parameters for it. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper is a narrative review of inhaled pulmonary vasodilators and does not report any original pharmacodynamic data, exposure-response analysis, or numeric PD parameters for iloprost. |
| PGx | Lovati_1988 | not_relevant | 2 | 10 | The study compares two rat strains (IVA-SIV vs CR) based on a physiological phenotype (hypertriglyceridemia) rather than a specific human gene variant/genotype, and it is an animal model study, not a human pharmacogenomic study. |
| PD | Meanwell_1992 | not_relevant | 3 | 2 | The paper reports IC50 values for the displacement of [3H]iloprost by new synthetic compounds, which characterizes the new drugs' affinity for the iloprost binding site, but does not report a pharmacodynamic exposure-response or dose-response relationship for iloprost itself. |
| PGx | Monteiro_2012 | not_relevant | 0 | 0 | The study investigates the effect of a high-fat diet on platelet aggregation and does not report any pharmacogenomic effects (gene variants) on the PK or PD of iloprost. |
| popPK | Negishi_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological comparison of receptor binding and signaling, not a pharmacokinetic study reporting disposition parameters for iloprost. |
| popPK | Norel_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid receptors in human bronchial preparations, reporting pD2 and Emax values rather than pharmacokinetic disposition parameters. |
| popPK | Parkington_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of iloprost's mechanism of action (hyperpolarization) in guinea-pig coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Puri_1991 | irrelevant | 0 | 0 | The study focuses on the mechanism of high molecular weight kininogen inhibiting thrombin-induced platelet aggregation, with iloprost used only as a tool to modulate cAMP levels, and no pharmacokinetic parameters for iloprost are reported. |
| PD | Puri_1991 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of high molecular weight kininogen (HK) and thrombin, mentioning iloprost only as a tool to modulate cAMP levels, without reporting any exposure-response or dose-response parameters for iloprost itself. |
| PD | Rex_2008 | not_relevant | 2 | 1 | The study reports hemodynamic effects of a single fixed dose (50 μg) in an animal model but does not provide plasma concentration data or fit a dose-response curve to derive numeric PD parameters like Emax or EC50. |
| popPK | Rösen_1994 | irrelevant | 0 | 0 | The study is a mechanistic investigation of platelet adhesion molecule expression and receptor occupancy, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Saleh_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for riociguat, not iloprost. |
| PD | Saleh_2016 | not_relevant | 0 | 0 | The paper analyzes the PK/PD relationship of riociguat, not iloprost. |
| popPK | Santhosh_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling and binding kinetics in porcine myocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Seiler_1997 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of a new compound (BMY 45778) using iloprost only as a comparator for receptor binding and signaling, with no pharmacokinetic parameters reported. |
| popPK | Serbest_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of vasorelaxant effects and does not report pharmacokinetic parameters. |
| popPK | Smyth_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor phosphorylation and binding affinity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Smyth_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor internalization and trafficking, not a pharmacokinetic study reporting disposition parameters. |
| PD | Tanaka_1995 | not_relevant | 3 | 5 | The paper reports receptor binding affinities (IC50) for isocarbacyclin metabolites, not a pharmacodynamic exposure-response or dose-response relationship for iloprost itself. |
| popPK | Vigstedt_2026 | irrelevant | 0 | 0 | The study investigates the immunological effects of iloprost (cytokine levels) rather than its pharmacokinetic disposition parameters. |
| popPK | Wahl_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (vasodilation) of iloprost on pial arteries in cats and rats, not its pharmacokinetic disposition parameters. |
| popPK | Watanabe_2001 | irrelevant | 0 | 0 | The study investigates platelet sensitivity to iloprost (a pharmacodynamic/functional assay) rather than reporting pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Wheeldon_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of prostanoid receptors on neutrophils and does not report pharmacokinetic parameters for iloprost. |
| popPK | Whittle_2012 | irrelevant | 0 | 0 | The paper reports in-vitro binding affinity and functional activity (pharmacodynamics) for iloprost, not pharmacokinetic disposition parameters. |
| PD | Wohlrab_2011 | not_relevant | 1 | 0 | The text is a review overview of iloprost in dermatology and does not report specific numeric PD parameters or exposure-response data. |
| popPK | Woyke_2022 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo mechanistic experiment measuring hemoglobin oxygen affinity, not a pharmacokinetic study reporting disposition parameters for iloprost. |
| popPK | Yamada_2010 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of a peptide (rapakinin) and uses iloprost only as a positive control for IP receptor activation, reporting no pharmacokinetic parameters for iloprost. |
| PD | Yamada_2010 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of rapakinin; iloprost is used only as a positive control for IP receptor activation, and no exposure-response or dose-response PD parameters for iloprost are reported. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry resource for drug screening and does not report pharmacokinetic parameters for iloprost. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics resource for detecting drug exposure and does not contain any pharmacodynamic or exposure-response analysis for iloprost. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for iloprost. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of iloprost pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of iloprost pharmacodynamics. |
| popPK | van_2024 | irrelevant | 0 | 0 | Iloprost is used as a pharmacological tool (PGI2 analogue) to test a mechanistic hypothesis regarding hypertension, not as the subject of a pharmacokinetic study, and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
