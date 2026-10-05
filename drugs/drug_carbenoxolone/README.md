<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;carbenoxolone&quot;}]"></div>

# carbenoxolone

- **generic name:** carbenoxolone
- **ATC codes:** `A02BX01`
- **DrugBank:** [DB02329](https://go.drugbank.com/drugs/DB02329) · **PubChem:** [CID 636403](https://pubchem.ncbi.nlm.nih.gov/compound/636403)
- **molar mass:** 570.7566 g/mol (C34H50O7) — DrugBank
- **groups:** experimental

## About

Carbenoxolone is an anti-ulcer drug that was used to treat peptic ulcers and other acid-related stomach disorders. It is now considered an experimental drug and is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q752861](https://www.wikidata.org/wiki/Q752861) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:13 | 3:20 | 0/0/0 | 3/1/0 | 0/0/0 | 124,938/4,168 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/18 | 8/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Achilli_2014_fraction_of_calcein_compartmentalized_to_the_outer_shell](drugs/drug_carbenoxolone/pd_Achilli_2014_fraction_of_calcein_compartmentalized_to_the_ou.md) | fraction of calcein compartmentalized to the outer shell ← carbenoxolone · direct Emax (saturable) effect | — | Achilli TM et al., Multilayer spheroids to quantify drug u…, Molecular pharmaceutics (2014) | [10.1021/mp500002y](https://doi.org/10.1021/mp500002y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Achilli_2014_total_spheroid_calcein](drugs/drug_carbenoxolone/pd_Achilli_2014_total_spheroid_calcein.md) | total spheroid calcein ← carbenoxolone · direct Emax (saturable) effect | — | Achilli TM et al., Multilayer spheroids to quantify drug u…, Molecular pharmaceutics (2014) | [10.1021/mp500002y](https://doi.org/10.1021/mp500002y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Choi_2018_GJIC](drugs/drug_carbenoxolone/pd_Choi_2018_GJIC.md) | GJIC activity ← carbenoxolone · direct sigmoid Emax (Hill) effect | — | Choi EJ et al., Gambogic Acid and Its Analogs Inhibit G…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00814](https://doi.org/10.3389/fphar.2018.00814) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | [Okada_2015_bell_shaped_outward_Cs_current](drugs/drug_carbenoxolone/pd_Okada_2015_bell_shaped_outward_Cs_current.md) | bell-shaped outward Cs+ current ← carbenoxolone · direct sigmoid Emax (Hill) effect | — | Okada Y et al., Carbenoxolone-sensitive and cesium-perm…, Biochemistry and biophysics… (2015) | [10.1016/j.bbrep.2015.09.010](https://doi.org/10.1016/j.bbrep.2015.09.010) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Ripps_2002_Cx38_hemichannel_currents](drugs/drug_carbenoxolone/pd_Ripps_2002_Cx38_hemichannel_currents.md) | Cx38 hemichannel currents ← carbenoxolone · direct sigmoid Emax (Hill) effect | — | Ripps H et al., Pharmacological enhancement of hemi-gap…, Journal of neuroscience met… (2002) | [10.1016/s0165-0270(02)00243-1](https://doi.org/10.1016/s0165-0270(02)00243-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carbenoxolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HSD11B1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Muramatsu_1984.pdf` | Muramatsu M et al., Effect of 2'-carboxymethoxy-4,4'-bis(3-…, Biochemical pharmacology (1984) | pd | 4 | [10.1016/0006-2952(84)90636-1](https://doi.org/10.1016/0006-2952(84)90636-1) | [6466376](https://www.ncbi.nlm.nih.gov/pubmed/6466376) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T10:11:22.311658+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achilli_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcein diffusion in cell spheroids where carbenoxolone is used solely as a gap junction inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Anderson_2009 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic effects of carbenoxolone as an enzyme inhibitor in the rabbit eye and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for carbenoxolone. |
| PD | Anderson_2009 | not_relevant | 4 | 2 | The paper describes a time- and dose-dependent PD effect (inhibition of cortisone-to-cortisol conversion) but the provided text lacks specific numeric PD parameters (e.g., IC50, Emax) or quantitative concentration-effect data. |
| popPK | Bader_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carbenoxolone's effect on adipocyte differentiation and does not report pharmacokinetic parameters. |
| popPK | Baumgart_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 11β-HSD inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition, with no pharmacokinetic data reported. |
| PD | Baumgart_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel thiazolone derivatives and compares them to carbenoxolone, but does not provide a pharmacodynamic model, exposure-response curve, or numeric PD parameters for carbenoxolone itself. |
| popPK | Baumgart_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of 11β-HSD1 inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition (IC50), with no pharmacokinetic parameters reported. |
| PD | Baumgart_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and cell viability data for new derivatives, but does not report a pharmacodynamic or exposure-response relationship for carbenoxolone. |
| popPK | Bhaskaracharya_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on P2X7 receptors where carbenoxolone is used only as a pharmacological tool/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Bhaskaracharya_2014 | not_relevant | 0 | 0 | The paper reports that carbenoxolone had no inhibitory effect on P2X7-induced dye uptake or IL-1β secretion, and no concentration-response data or PD parameters are provided for it. |
| popPK | Burnham_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cardiac gap junction uncoupling (IC50) and does not report pharmacokinetic disposition parameters for carbenoxolone. |
| popPK | Choi_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on gap junction inhibition where carbenoxolone is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Cooreman_2022 | irrelevant | 0 | 0 | The study investigates the effects of various drugs on Connexin43 hemichannels in vitro and does not involve carbenoxolone or pharmacokinetic modeling. |
| PD | Cooreman_2022 | not_relevant | 0 | 0 | The paper does not report a concentration-effect or dose-response analysis for carbenoxolone; it is used only as a positive control inhibitor in a single-condition assay, and no numeric PD parameters (e.g., IC50, Emax) are provided for it. |
| popPK | Darko_2021 | irrelevant | 0 | 0 | The paper is a computational study on anti-Ebola compounds and does not involve carbenoxolone or any pharmacokinetic parameters. |
| PD | Darko_2021 | not_relevant | 0 | 0 | The paper is a computational study on novel anti-Ebola compounds and does not mention carbenoxolone or report any pharmacodynamic or exposure-response data. |
| popPK | Epple_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sodium absorption where carbenoxolone is used as a tool compound (11 beta-HSD inhibitor), not as the subject of pharmacokinetic analysis. |
| popPK | Gadeock_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P2X7 receptors in leukemia cells where carbenoxolone is used only as a negative control antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Gadeock_2012 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for ATP and other agonists, but explicitly states that carbenoxolone did not impair the effect, providing no numeric PD relationship or parameters for carbenoxolone. |
| popPK | Gong_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of enzyme co-localization and activity where carbenoxolone is used only as a tool compound/inhibitor, with no pharmacokinetic parameters reported. |
| PD | Gong_2008 | not_relevant | 3 | 2 | The paper reports an IC50 for celecoxib's effect on 11ss-HSD1 activity, not for carbenoxolone; carbenoxolone is used only as a fixed-dose inhibitor in a qualitative observation of COX-2 expression. |
| popPK | Heim_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastric mucosal cell function, not a pharmacokinetic study, and reports no disposition parameters for carbenoxolone. |
| PD | Heim_1990 | not_relevant | 0 | 0 | The study reports that carbenoxolone failed to enhance tracer incorporation, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Ichikawa_2009 | irrelevant | 0 | 0 | The study investigates intracellular calcium signaling in rat bone marrow stromal cells, using carbenoxolone only as a gap junction blocker (tool compound) rather than as the subject of pharmacokinetic analysis. |
| PD | Ichikawa_2009 | not_relevant | 0 | 0 | The paper investigates P2Y2 receptor signaling in bone marrow stromal cells; carbenoxolone is mentioned only as a gap junction blocker in a qualitative pharmacological context, with no exposure-response or dose-response analysis for carbenoxolone. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not report pharmacokinetic parameters for carbenoxolone. |
| PD | Jia_2023 | not_relevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for carbenoxolone. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | Carbenoxolone is used as a pharmacological tool to block gap junctions in an in vitro/physiological study, not as the subject of a pharmacokinetic analysis. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper uses carbenoxolone as a qualitative pharmacological tool to block gap junctions, but does not report a dose-response or exposure-response relationship for carbenoxolone itself. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbenoxolone's anti-inflammatory effects in sepsis models and does not report any pharmacokinetic parameters. |
| PD | Li_2013 | not_relevant | 0 | 0 | The provided text consists only of materials and a brief description of an animal model (CLP) and does not contain any results, data, or numeric parameters for a pharmacodynamic or exposure-response relationship. |
| popPK | Ling_2021 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on neuroinflammation where carbenoxolone is used only as a Pannexin 1 inhibitor, with no pharmacokinetic parameters reported. |
| PD | Ling_2021 | not_relevant | 3 | 2 | The paper uses carbenoxolone as a qualitative inhibitor in cell assays without reporting a formal dose-response curve, Emax, or EC50 for the drug itself. |
| popPK | Liu_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of carbenoxolone as a gap junction blocker in rats, reporting behavioral endpoints (time to loss of righting reflex) rather than pharmacokinetic parameters. |
| PGx | Mantero_1996 | not_relevant | 0 | 0 | The paper discusses carbenoxolone only as a cause of acquired apparent mineralocorticoid excess, not as a drug whose PK/PD is altered by a specific gene variant. |
| PGx | Marsh_2016 | not_relevant | 0 | 0 | The paper investigates the binding of carbenoxolone to a specific protein (GJC3) as a potential target, but does not report any pharmacokinetic or pharmacodynamic parameters of carbenoxolone being altered by a gene variant. |
| popPK | Mascayano_2024 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay investigating the allosteric inhibition of 5-lipoxygenase by carbenoxolone, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | McGuire_2002 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology experiment in mice where carbenoxolone is used only as a non-specific inhibitor (probe) and no pharmacokinetic parameters are reported. |
| PD | McGuire_2002 | not_relevant | 0 | 0 | The paper investigates PAR2-mediated vascular relaxation; carbenoxolone is listed only as a negative control that did not inhibit relaxation, with no dose-response or PD parameters reported for it. |
| popPK | Molnár_2011 | irrelevant | 0 | 0 | The study is a mechanistic investigation of astrocytic calcium signaling in rat brain slices where carbenoxolone is used only as a gap junction blocker, not as the subject of pharmacokinetic analysis. |
| PD | Molnár_2011 | not_relevant | 0 | 0 | The paper studies astrocytic calcium signaling in the brain; carbenoxolone is used only as a qualitative gap junction blocker, and no pharmacodynamic parameters (e.g., IC50, Emax) for carbenoxolone are reported. |
| popPK | Mosquera_2018 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic inhibition study where carbenoxolone is used only as a positive control, not a pharmacokinetic study. |
| popPK | Murali_2014 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper in rat carotid body cells where carbenoxolone is used only as a tool compound to block pannexin-1 channels, not as the subject of pharmacokinetic analysis. |
| popPK | Murali_2017 | irrelevant | 0 | 0 | Carbenoxolone is used as a pharmacological tool (Panx-1 channel blocker) in an electrophysiology study, not as the subject drug for PK analysis. |
| popPK | Muramatsu_1984 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Muramatsu_1984 | not_relevant | 0 | 0 | The paper investigates the effect of SU-88 on prostaglandin metabolism, not carbenoxolone, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Okada_2015 | irrelevant | 0 | 0 | The paper is an electrophysiology study of ion channels in frog taste cells where carbenoxolone is used only as a pharmacological blocker, not as a subject drug for PK analysis. |
| popPK | Pereira_2019 | irrelevant | 0 | 0 | Carbenoxolone is used only as a pharmacological tool (NP-SH blocker) to investigate mechanisms of gastroprotection, not as the subject of a pharmacokinetic study. |
| PD | Pereira_2019 | not_relevant | 0 | 0 | The paper studies a plant extract (Avicennia schaueriana) and uses carbenoxolone only as a qualitative mechanism probe (reversal of effect), without reporting any exposure-response or dose-response data for carbenoxolone itself. |
| popPK | Petrovich_2014 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of FKBP51 induction by aldosterone and does not report any pharmacokinetic parameters for carbenoxolone. |
| PD | Petrovich_2014 | not_relevant | 0 | 0 | The paper investigates the dose-response of aldosterone on FKBP51 induction, not the pharmacodynamics of carbenoxolone. |
| popPK | Reyes_2009 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation using carbenoxolone as a pharmacological inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ripps_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring the IC50 of carbenoxolone on gap junctions in Xenopus oocytes, not a pharmacokinetic study. |
| popPK | Rolan_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for emestedastat, not carbenoxolone. |
| popPK | Skeberdis_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gap junction uncoupling where carbenoxolone is used as a reagent, not a pharmacokinetic study. |
| PD | Skeberdis_2011 | not_relevant | 3 | 2 | The paper reports an IC50 for octanol (a different compound) but only provides qualitative observations regarding carbenoxolone (lack of recovery), without numeric concentration-effect parameters for carbenoxolone. |
| popPK | Sliwoski_2014 | irrelevant | 0 | 0 | The paper is a review of computational drug discovery methods and contains no pharmacokinetic data for carbenoxolone. |
| PD | Sliwoski_2014 | not_relevant | 0 | 0 | The text is a general review of computational methods in drug discovery and does not contain any specific pharmacodynamic or exposure-response data for carbenoxolone. |
| popPK | Stanetty_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antiviral activity of glycyrrhizin analogues, with carbenoxolone serving only as a reference compound for cytotoxicity and structure, and no pharmacokinetic parameters are reported. |
| PD | Stanetty_2012 | not_relevant | 0 | 0 | The paper reports IC50 values for new glycyrrhizin analogues, not for carbenoxolone, and does not provide a pharmacodynamic model or exposure-response relationship for carbenoxolone. |
| popPK | Studzińska_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of 11β-HSD1 inhibitors where carbenoxolone is used only as a comparator for enzyme inhibition potency, not as a subject for pharmacokinetic analysis. |
| PD | Studzińska_2021 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition data (IC50) for novel compounds and carbenoxolone, but does not provide a pharmacokinetic or pharmacodynamic model (exposure-response) or numeric PD parameters like Emax/EC50 for a biological system. |
| popPK | Thakur_2015 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroinflammation and mitochondrial function in a rat model, reporting no pharmacokinetic parameters for carbenoxolone. |
| PD | Thakur_2015 | not_relevant | 1 | 0 | The paper reports qualitative biological effects of a fixed dose (20 mg/kg) in an animal model but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Vessey_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carbenoxolone's effect on calcium channels and synaptic transmission, reporting no pharmacokinetic parameters. |
| popPK | Vivar_2012 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of synaptic transmission in rats where carbenoxolone is used solely as a gap junction blocker, not as the subject of pharmacokinetic analysis. |
| popPK | Véga_2003 | irrelevant | 0 | 0 | The study investigates glucose uptake in rat vagus nerves where carbenoxolone is used solely as a gap junction blocker, not as the subject drug for pharmacokinetic analysis. |
| PGx | Walker_2007 | not_relevant | 0 | 0 | The paper discusses carbenoxolone as a pharmacological inhibitor of 11b-HSD1 but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Xiao_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of uterine artery contractions where carbenoxolone is used as a tool compound (11β-HSD inhibitor) to modulate cortisol effects, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
