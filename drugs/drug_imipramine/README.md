<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;imipramine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imipramine_Tamayo1992_reference&quot;,&quot;label&quot;:&quot;Tamayo_1992_reference&quot;,&quot;href&quot;:&quot;drugs/drug_imipramine/Imipramine_Tamayo1992_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# imipramine

- **generic name:** imipramine
- **ATC codes:** `N06AA02`
- **DrugBank:** [DB00458](https://go.drugbank.com/drugs/DB00458)
- **groups:** approved, investigational

## About

**Description.** Imipramine, the prototypical tricyclic antidepressant (TCA), is a dibenzazepine-derivative TCA. TCAs are structurally similar to phenothiazines. They contain a tricyclic ring system with an alkyl amine substituent on the central ring. In non-depressed individuals, imipramine does not affect mood or arousal, but may cause sedation. In depressed individuals, imipramine exerts a positive effect on mood. TCAs are potent inhibitors of serotonin and norepinephrine reuptake. Tertiary amine TCAs, such as imipramine and amitriptyline, are more potent inhibitors of serotonin reuptake than secondary amine TCAs, such as nortriptyline and desipramine. TCAs also block histamine H<sub>1</sub> receptors, &alpha;<sub>1</sub>-adrenergic receptors and muscarinic receptors, which accounts for their sedative, hypotensive and anticholinergic effects (e.g. blurred vision, dry mouth, constipation, urinary retention), respectively [A6584]. Imipramine has less sedative and anticholinergic effects than the tertiary amine TCAs, amitriptyline and clomipramine. Imipramine may be used to treat depression and nocturnal enuresis in children [FDA Label]. Unlabeled indications include chronic and neuropathic pain (including diabetic neuropathy), panic disorder, attention-deficit/hyperactivity disorder (ADHD), and post-traumatic stress disorder (PTSD) [L1349,L1348,A31900,L1351,L1352,L1353,A31904].

**Indication.** For the relief of symptoms of depression and as temporary adjunctive therapy in reducing enuresis in children aged 6 years and older [FDA Label]. 

May also be used off-label to manage panic disorders with or without agoraphobia, as a second line agent for ADHD in children and adolescents, to manage bulimia nervosa, for short-term management of acute depressive episodes in bipolar disorder and schizophrenia, for the treatment of acute stress disorder and posttraumatic stress disorder, and for symptomatic treatment of postherpetic neuralgia and painful diabetic neuropathy [L1349,L1348,A31900,L1351,L1352,L1353,A31904].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 22:43 | 9:59 | 0/1/0 | 1/0/0 | 0/0/0 | 211,608/16,568 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 4/2 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Tamayo_1992_reference](drugs/drug_imipramine/Imipramine_Tamayo1992_reference.md) | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Teschemacher_1999](drugs/drug_imipramine/pd_Teschemacher_1999_I_HERG.md) | Teschemacher AG et al., Inhibition of the current of heterologo…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702800](https://doi.org/10.1038/sj.bjp.0702800) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imipramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | stomach | <sub>“…c amine groups are ionized in the acidic environment of the stomach, preventing movement a…”</sub> | prose |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), CYP2C18 (substrate), DRD1 (binder), DRD2 (binder), HRH1 (target), HTR1A (activator), HTR2A (target), HTR2C (target), HTR6 (binder), HTR7 (target), KCND2 (inhibitor), KCND3 (inhibitor), KCNH1 (inhibitor), KCNH2 (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tamayo_1992.pdf` | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | popPK | 10 | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) | [1505617](https://pubmed.ncbi.nlm.nih.gov/1505617) | The paper is a population PK study for imipramine, but the evidence only provides elimination rate constants (k), not the specific clearance, volume, or half-life values requested. |
| `Grasela_1987.pdf` | Grasela TH et al., An evaluation of population pharmacokin…, Clinical pharmacology and t… (1987) | popPK | 9 | [10.1038/clpt.1987.174](https://doi.org/10.1038/clpt.1987.174) | [3665341](https://pubmed.ncbi.nlm.nih.gov/3665341) | The paper is a population PK study of imipramine, but the evidence only reports a relative change (20% decrease in clearance) without providing the absolute numeric parameter values (CL, V, etc.). |
| `Meineke_1997.pdf` | Meineke I et al., Modelling of non-linear pharmacokinetic…, Pharmacology & toxicology (1997) | popPK | 9 | [10.1111/j.1600-0773.1997.tb01972.x](https://doi.org/10.1111/j.1600-0773.1997.tb01972.x) | [9225362](https://pubmed.ncbi.nlm.nih.gov/9225362) | The study reports a compartmental PK model for imipramine in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| `Daniel_1981.pdf` | Daniel W et al., Cerebral pharmacokinetics of imipramine…, Naunyn-Schmiedeberg's archi… (1981) | popPK | 8 | [10.1007/BF00503818](https://doi.org/10.1007/BF00503818) | [7322212](https://pubmed.ncbi.nlm.nih.gov/7322212) | The paper describes a pharmacokinetic study of imipramine in rats with compartmental modeling, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Daripelli_2026.pdf` | Daripelli S et al., Model-based steady state pharmacokineti…, Xenobiotica; the fate of fo… (2026) | popPK | 8 | [10.1080/00498254.2026.2637031](https://doi.org/10.1080/00498254.2026.2637031) | [41744318](https://pubmed.ncbi.nlm.nih.gov/41744318) | The study reports quantitative PK parameters (clearance, distribution) for imipramine in mice, but the specific numeric values are not present in the provided abstract text. |
| `Fernandez_1989.pdf` | Fernandez de Gatta MM et al., Predictive techniques applied to imipra…, DICP : the annals of pharma… (1989) | popPK | 8 | [10.1177/106002808902300508](https://doi.org/10.1177/106002808902300508) | [2728528](https://pubmed.ncbi.nlm.nih.gov/2728528) | The study is a population PK analysis of imipramine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports prediction error metrics (ME, RMSE). |
| `Sistovaris_1983.pdf` | Sistovaris N et al., Thin-layer chromatographic determinatio…, Journal of chromatography (1983) | popPK | 8 | [10.1016/s0378-4347(00)84844-6](https://doi.org/10.1016/s0378-4347(00)84844-6) | [6643612](https://pubmed.ncbi.nlm.nih.gov/6643612) | The paper describes a pharmacokinetic study of imipramine using a one-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-23T22:36:12.908698+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Apparsundaram_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic binding assay investigating SERT inhibition, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | The paper is a pharmacological study on nicotinic receptor antagonists where imipramine is only mentioned as a reference for a binding site, with no PK parameters reported. |
| PD | Arias_2013 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro pharmacological characterization of novel nicotinic receptor antagonists, with imipramine mentioned only as a structural reference for binding site overlap, not as the subject of a PD or exposure-response analysis. |
| popPK | Beck_1989 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor mechanisms in rat hippocampal slices and does not report any pharmacokinetic parameters for imipramine. |
| popPK | Bliziotes_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin transporters in bone cells, using imipramine only as a pharmacological antagonist, and does not report any pharmacokinetic parameters for imipramine. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | The study focuses on the neurochemical effects of nomifensine on monoamine metabolism in rat brains, with imipramine serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Conway_1985 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Conway_1985 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity and dissociation kinetics, not a pharmacodynamic exposure-response or dose-response relationship for drug effect. |
| popPK | Daniel_1981 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of imipramine in rats with compartmental modeling, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Daripelli_2026 | relevant | 8 | 2 | The study reports quantitative PK parameters (clearance, distribution) for imipramine in mice, but the specific numeric values are not present in the provided abstract text. |
| popPK | Duan_2012 | irrelevant | 1 | 0 | Imipramine is used only as a benchmark drug for validating a liver partition coefficient model, and no specific pharmacokinetic parameter values (CL, V, etc.) for imipramine are reported in the text. |
| PD | Duan_2012 | not_relevant | 0 | 0 | Imipramine is used only as a benchmark drug to validate the liver partition coefficient prediction model; the paper does not report a pharmacodynamic or exposure-response relationship for imipramine itself. |
| popPK | Fernandez_1989 | relevant | 8 | 0 | The study is a population PK analysis of imipramine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports prediction error metrics (ME, RMSE). |
| popPK | Frizelle_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of synaptic transmission, not a pharmacokinetic study, and reports no disposition parameters for imipramine. |
| popPK | Grasela_1987 | relevant | 9 | 2 | The paper is a population PK study of imipramine, but the evidence only reports a relative change (20% decrease in clearance) without providing the absolute numeric parameter values (CL, V, etc.). |
| popPK | Gup_1989 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and contractile study where imipramine is used only as a comparator antagonist, not as the subject drug for pharmacokinetic analysis. |
| PD | Gup_1989 | not_relevant | 4 | 2 | The paper reports in vitro concentration-response data for imipramine (antagonist inhibition) but provides no numeric PD parameters (e.g., IC50, Ki) or curves in the text, only qualitative statements that inhibition was identical between groups. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring sperm immobilization potency (EC50), not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Iga_2015 | irrelevant | 2 | 0 | The study focuses on fluvoxamine as the subject drug, with imipramine serving only as a secondary simulation case without reported specific PK parameter values. |
| popPK | Iqbal_2022 | irrelevant | 0 | 0 | The paper is a phytochemical and pharmacological study of a plant extract where imipramine is only mentioned as a compound identified by GC-MS, with no pharmacokinetic data reported. |
| PD | Iqbal_2022 | not_relevant | 0 | 0 | The paper reports pharmacological activity (EC50) for plant extracts (Chrozophora tinctoria), not for the drug imipramine; imipramine is only listed as a compound identified in the extract. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Kutsuno_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT enzyme activity in liver microsomes, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for imipramine. |
| PD | Kutsuno_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (glucuronidation rates and inhibition) for imipramine, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Launay_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of histamine receptors in platelets where imipramine is only mentioned as a non-interacting effector site, with no pharmacokinetic parameters reported. |
| PD | Launay_1994 | not_relevant | 0 | 0 | The paper focuses on histamine receptor pharmacology in platelets and only mentions imipramine as a negative control for effector sites, providing no exposure-response or dose-response data for imipramine. |
| popPK | Marcus_2007 | irrelevant | 0 | 0 | The study focuses on side effect profiles and dropout rates in a clinical trial, not on pharmacokinetic parameters. |
| popPK | Meineke_1997 | relevant | 9 | 0 | The study reports a compartmental PK model for imipramine in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Merlo_1989 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment assessing anxiolytic effects, not a pharmacokinetic study, and reports no disposition parameters for imipramine. |
| popPK | Meyerson_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of binding sites in human platelets, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Miller_2016 | irrelevant | 2 | 0 | The study focuses on toxicokinetics in an invertebrate (Gammarus pulex) to estimate bioconcentration factors, not human/animal population pharmacokinetic parameters (CL, V, etc.) for imipramine, and no specific numeric PK values for imipramine are provided in the evidence. |
| popPK | Muraoka_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in cell lines and does not report pharmacokinetic parameters. |
| popPK | Nowakowska_2003 | irrelevant | 0 | 0 | The study is a behavioral pharmacology comparison where imipramine serves as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | ODonnell_1985 | irrelevant | 0 | 0 | The study is a mechanistic investigation of beta-adrenergic receptor coupling in rat brain tissue, not a pharmacokinetic study, and reports no disposition parameters for imipramine. |
| PD | ODonnell_1985 | not_relevant | 0 | 0 | The paper reports that imipramine did not affect receptor/N-protein coupling, providing no numeric PD parameters or exposure-response relationship for imipramine. |
| popPK | ORiordan_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding kinetics and affinity states, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Onaivi_1989 | irrelevant | 0 | 0 | The study is a behavioral validation of an anxiety test in mice where imipramine is used only as a comparator agent with no pharmacokinetic parameters reported. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of anpirtoline, using imipramine only as a behavioral comparator without reporting any pharmacokinetic parameters. |
| PD | Schlicker_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of anpirtoline; imipramine is only mentioned as a standard comparator in the forced swimming test without providing specific dose-response parameters or PD modeling for imipramine. |
| popPK | Segonzac_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and transporter kinetics in human platelets, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| PD | Segonzac_1985 | not_relevant | 3 | 2 | The paper describes in vitro binding kinetics and allosteric modulation of imipramine by tryptamine/serotonin, reporting a Km for tryptamine uptake but lacking a formal pharmacodynamic exposure-response or dose-response model for imipramine's therapeutic effect. |
| popPK | Sette_1983 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating the mechanism of imipramine binding, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sher_2022 | irrelevant | 0 | 0 | The study focuses on the phytochemical and pharmacological effects of Chrozophora tinctoria, mentioning imipramine only as a compound detected in the plant extract, with no pharmacokinetic data reported. |
| PD | Sher_2022 | not_relevant | 0 | 0 | The paper reports pharmacological effects (IC50, EC50) for plant extracts (Chrozophora tinctoria), not for the specific drug imipramine, which is only mentioned as a compound identified within the extracts. |
| popPK | Simiand_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of SR 57746A, with imipramine serving only as a comparator in behavioral tests, and no pharmacokinetic parameters are reported. |
| popPK | Sistovaris_1983 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of imipramine using a one-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Sitte_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin transporter kinetics in HEK 293 cells, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Slamon_2000 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity/toxicology investigation measuring EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Slamon_2000 | not_relevant | 3 | 2 | The paper reports EC50 values for cytotoxicity in cell lines, which is a toxicological endpoint rather than a pharmacodynamic (therapeutic) exposure-response relationship for the drug's clinical effect. |
| popPK | Stockmeier_1986 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of serotonin receptor regulation in rat brain, not a pharmacokinetic study, and imipramine is used only as a radioligand for binding assays. |
| PD | Stockmeier_1986 | not_relevant | 0 | 0 | The paper focuses on 5-HT-2 receptor regulation by ECS and amitriptyline; imipramine is only mentioned as a binding marker for presynaptic function, with no exposure-response or dose-response analysis for imipramine. |
| popPK | Sugawara_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of imipramine's effect on glutamate transport in rat intestinal membranes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Sugawara_1998 | not_relevant | 3 | 2 | The paper describes a mechanistic in vitro study of imipramine's inhibition of glutamate transport, providing qualitative kinetic insights (competitive inhibition) but lacking specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response model for the drug itself. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study comparing SSRIs, with imipramine serving only as a comparator for potency in the forced swim test, and it contains no pharmacokinetic parameters. |
| popPK | Teschemacher_1999 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating imipramine's block of HERG potassium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Willets_1995 | irrelevant | 0 | 0 | The study is an in-vitro neurotoxicity investigation of salsolinol where imipramine is used only as a non-specific inhibitor control, with no pharmacokinetic parameters reported. |
| PD | Willets_1995 | not_relevant | 0 | 0 | The paper studies the neurotoxicity and pharmacological effects of salsolinol, not imipramine; imipramine is only mentioned as an ineffective inhibitor of cytotoxicity. |
| popPK | Wölfel_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin efflux in rabbit platelets and does not report pharmacokinetic disposition parameters for imipramine. |
| PD | Wölfel_1991 | not_relevant | 4 | 2 | The paper describes a concentration-effect relationship and mentions Emax, but the provided text lacks specific numeric values for Emax, EC50, or concentration-response data points, making quantitative PD parameters non-extractable. |
| popPK | Wölfel_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of the 5-HT transporter in rabbit platelets, not a pharmacokinetic study reporting disposition parameters for imipramine. |
| popPK | Xiang_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy and tolerability meta-analysis of antidepressants in pediatric MDD, not a pharmacokinetic study, and contains no PK parameters for imipramine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 22:36 UTC</sub>
