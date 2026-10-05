<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;methylscopolamine&quot;}]"></div>

# methylscopolamine

- **generic name:** methylscopolamine
- **ATC codes:** `A03BB03`, `A03CB01`, `S01FA03`
- **DrugBank:** [DB11315](https://go.drugbank.com/drugs/DB11315) · **PubChem:** [CID 71183](https://pubchem.ncbi.nlm.nih.gov/compound/71183)
- **molar mass:** 318.392 g/mol (C18H24NO4) — DrugBank
- **groups:** approved

## About

Methylscopolamine is a semisynthetic belladonna alkaloid with parasympatholytic (anticholinergic) action, used for functional gastrointestinal disorders such as spasms, and as an ophthalmological anticholinergic mydriatic. It is an approved drug, but no European Union marketing authorisation is recorded, so it appears to be used only in some countries rather than widely.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27087955](https://www.wikidata.org/wiki/Q27087955) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:30 | 2:33 | 0/0/0 | 0/0/0 | 0/0/0 | 92,133/3,215 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 3/3 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylscopolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 206 matched, 88 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 | not captured | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Akins_1990.pdf` | Akins PT et al., M1 muscarinic acetylcholine receptor in…, Journal of neurochemistry (1990) | pd | 4 | [10.1111/j.1471-4159.1990.tb13310.x](https://doi.org/10.1111/j.1471-4159.1990.tb13310.x) | [2152795](https://www.ncbi.nlm.nih.gov/pubmed/2152795) | metadata signals extractable PD data (EC50) |
| `Cortés_1986.pdf` | Cortés R et al., Muscarinic cholinergic receptor subtype…, Brain research (1986) | pd | 4 | [10.1016/0006-8993(86)90448-8](https://doi.org/10.1016/0006-8993(86)90448-8) | [3942874](https://www.ncbi.nlm.nih.gov/pubmed/3942874) | metadata signals extractable PD data (IC50) |
| `Daeffler_1999.pdf` | Daeffler L et al., Inverse agonist activity of pirenzepine…, British journal of pharmaco… (1999) | pd | 4 | [10.1038/sj.bjp.0702407](https://doi.org/10.1038/sj.bjp.0702407) | [10205015](https://www.ncbi.nlm.nih.gov/pubmed/10205015) | metadata signals extractable PD data (EC50) |
| `Dickinson_1988.pdf` | Dickinson KE et al., Muscarinic cholinergic receptor subtype…, The Journal of pharmacology… (1988) | pd | 4 | not captured | [2901489](https://www.ncbi.nlm.nih.gov/pubmed/2901489) | metadata signals extractable PD data (IC50) |
| `Eglen_1993.pdf` | Eglen RM et al., Muscarinic M3 receptors mediate total i…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0922-4106(93)90058-h](https://doi.org/10.1016/0922-4106(93)90058-h) | [8420791](https://www.ncbi.nlm.nih.gov/pubmed/8420791) | metadata signals extractable PD data (EC50) |
| `Ellis_1990.pdf` | Ellis J et al., Muscarinic receptors and second-messeng…, Brain research (1990) | pd | 4 | [10.1016/0006-8993(90)90167-a](https://doi.org/10.1016/0006-8993(90)90167-a) | [2159358](https://www.ncbi.nlm.nih.gov/pubmed/2159358) | metadata signals extractable PD data (EC50) |
| `Gerstin_1992.pdf` | Gerstin EH et al., Heparin, dextran and trypan blue allost…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1281880](https://www.ncbi.nlm.nih.gov/pubmed/1281880) | metadata signals extractable PD data (EC50) |
| `Gup_1989.pdf` | Gup DI et al., Muscarinic cholinergic receptors in nor…, The Journal of urology (1989) | pd | 4 | [10.1016/s0022-5347(17)38827-4](https://doi.org/10.1016/s0022-5347(17)38827-4) | [2746785](https://www.ncbi.nlm.nih.gov/pubmed/2746785) | metadata signals extractable PD data (Emax) |
| `Kukhtina_2000.pdf` | Kukhtina VV et al., Muscarinic toxin-like proteins from cob…, European journal of biochem… (2000) | pd | 4 | [10.1046/j.1432-1033.2000.01775.x](https://doi.org/10.1046/j.1432-1033.2000.01775.x) | [11082188](https://www.ncbi.nlm.nih.gov/pubmed/11082188) | metadata signals extractable PD data (IC50) |
| `Lepor_1984.pdf` | Lepor H et al., Characterization and localization of th…, The Journal of urology (1984) | pd | 4 | [10.1016/s0022-5347(17)49636-4](https://doi.org/10.1016/s0022-5347(17)49636-4) | [6204069](https://www.ncbi.nlm.nih.gov/pubmed/6204069) | metadata signals extractable PD data (IC50) |
| `Rupniak_1994.pdf` | Rupniak NM et al., Antinociceptive and toxic effects of (+…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb17164.x](https://doi.org/10.1111/j.1476-5381.1994.tb17164.x) | [7889306](https://www.ncbi.nlm.nih.gov/pubmed/7889306) | metadata signals extractable PD data (IC50) |
| `Scherrer_1997.pdf` | Scherrer D et al., Glucocorticoid modulation of muscarinic…, Fundamental & clinical phar… (1997) | pd | 4 | [10.1111/j.1472-8206.1997.tb00176.x](https://doi.org/10.1111/j.1472-8206.1997.tb00176.x) | [9107555](https://www.ncbi.nlm.nih.gov/pubmed/9107555) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T13:29:23.418812+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2009 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and enzyme inhibition assay where methylscopolamine is used only as a radioligand probe, not as the subject drug for pharmacokinetic analysis. |
| PD | Abe_2009 | not_relevant | 0 | 0 | The paper investigates receptor binding and enzyme inhibition of fatty acids in saw palmetto extract, not the pharmacodynamics of methylscopolamine (which is used only as a radioligand). |
| popPK | Akins_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Akins_1990 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of M1 receptors in cultured rat neostriatum and does not report pharmacokinetic or pharmacodynamic data for methylscopolamine. |
| popPK | Asselin_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cholinergic desensitization in rat pancreatic acini, using methylscopolamine only as a radioligand for receptor binding, not as a subject drug for pharmacokinetic analysis. |
| popPK | Bolden_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and cAMP formation using methylscopolamine as a radioligand, not a pharmacokinetic study. |
| popPK | Botero_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of allosteric modulators using [3H]N-methylscopolamine as a radioligand, not a pharmacokinetic study of methylscopolamine. |
| popPK | Brown_2011 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment using methylscopolamine as a probe drug to assess hippocampal function, and it does not report any pharmacokinetic parameters. |
| popPK | Chang_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscarinic receptor expression and signaling in CHO cells, using methylscopolamine only as a radioligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Chang_1997 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, IC50) for carbamylcholine and ethanol, but methylscopolamine is used only as a radioligand for receptor binding assays, not as the drug for which a pharmacodynamic exposure-response relationship is characterized. |
| popPK | Cortés_1986 | irrelevant | 0 | 0 | The study is an in-vitro autoradiographic analysis of muscarinic receptor binding using methylscopolamine as a ligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Cortés_1986 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (Kd, IC50) for methylscopolamine, which are pharmacological binding parameters, not in vivo pharmacodynamic (exposure-response) or dose-response relationships for a drug effect. |
| popPK | Cortés_1986_2 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/autoradiography analysis using methylscopolamine as a radioligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Cortés_1986_2 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (Kd, IC50) for methylscopolamine, which are pharmacological binding parameters, not pharmacodynamic (exposure-response or dose-response) parameters describing a physiological or clinical effect. |
| popPK | Cuq_1994 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and pharmacological mechanism study using methylscopolamine as a radioligand, not a pharmacokinetic study. |
| popPK | Daeffler_1999 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Daeffler_1999 | not_relevant | 0 | 0 | The paper focuses on the inverse agonist activity of pirenzepine at M2 receptors and does not report pharmacodynamic or exposure-response data for methylscopolamine. |
| popPK | Dickinson_1988 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Dickinson_1988 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor binding and secretion in frog esophageal cells and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for methylscopolamine. |
| popPK | Djeddi_2023 | irrelevant | 0 | 0 | The paper describes a computational method for predicting drug-target interactions and contains no pharmacokinetic data for methylscopolamine. |
| PD | Djeddi_2023 | not_relevant | 0 | 0 | The paper describes a machine learning method (DTIOG) for predicting drug-target interactions using knowledge graphs and embeddings; it contains no pharmacokinetic, pharmacodynamic, or dose-response data for methylscopolamine or any other drug. |
| popPK | Eglen_1993 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Eglen_1993 | not_relevant | 0 | 0 | The paper studies muscarinic M3 receptors in murine fibrosarcoma cells and does not report any pharmacodynamic or exposure-response data for methylscopolamine. |
| popPK | Ehrich_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of organophosphorus compounds on muscarinic receptors, using methylscopolamine only as a radiolabeled ligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Ehrich_1994 | not_relevant | 0 | 0 | The study investigates the interaction of organophosphorus compounds with muscarinic receptors using [3H]-N-methylscopolamine as a radioligand, but does not report a pharmacodynamic exposure-response relationship or numeric PD parameters for methylscopolamine itself. |
| popPK | Ellis_1990 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Ellis_1990 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor signaling in primary neuron cultures and does not report pharmacodynamic or exposure-response data for methylscopolamine. |
| popPK | Ensing_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxitropium bromide, using methylscopolamine only as a radioligand in the assay, not as the subject drug. |
| popPK | Frucht_1999 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and cell proliferation assay using methylscopolamine as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Galper_1982 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using methylscopolamine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PD | Galper_1982 | not_relevant | 3 | 2 | The paper reports receptor binding kinetics and agonist-mediated receptor loss (IC50s for carbamylcholine, Kd for methylscopolamine) in a cell culture model, but does not report a pharmacodynamic exposure-response relationship for methylscopolamine as a drug effect. |
| popPK | Gerstin_1992 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Gerstin_1992 | not_relevant | 0 | 0 | The paper focuses on the allosteric modulation of M2 muscarinic receptors by heparin, dextran, and trypan blue, and does not mention methylscopolamine or report any pharmacodynamic parameters for it. |
| popPK | Greven_1995 | irrelevant | 0 | 0 | Methylscopolamine is used only as a pharmacological tool (muscarinic antagonist) to test mechanisms of cicletanine, with no PK parameters reported. |
| popPK | Gup_1989 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Gup_1989 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor expression in pediatric and myelodysplastic bladders and does not report any pharmacodynamic or exposure-response analysis for methylscopolamine. |
| popPK | Hase_1988 | irrelevant | 0 | 0 | Methylscopolamine is used only as a tool to induce dry mouth, and the study measures salivary glucose clearance, not the pharmacokinetics of methylscopolamine. |
| popPK | Hu_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor selectivity and binding, not a pharmacokinetic study, and methylscopolamine is used only as a radioligand for binding assays. |
| popPK | Huwiler_2010 | irrelevant | 0 | 0 | The paper describes an in-vitro fluorescence anisotropy assay for the M1 receptor and uses methylscopolamine only as a radioligand reference, reporting no pharmacokinetic parameters. |
| PD | Huwiler_2010 | not_relevant | 0 | 0 | The paper describes a biochemical binding assay (fluorescence anisotropy) for the M1 receptor and reports affinity constants (IC50/Ki) for ligands, but it does not report a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine in a biological system (e.g., effect vs. plasma concentration). |
| popPK | Kajimura_1990 | irrelevant | 0 | 0 | The paper concerns carbachol and acid secretion in guinea pigs, not methylscopolamine pharmacokinetics. |
| PD | Kajimura_1990 | not_relevant | 0 | 0 | The paper discusses carbachol, not methylscopolamine, and focuses on acid secretion in guinea pigs rather than a PD model for the specified drug. |
| popPK | Keam_2004 | irrelevant | 0 | 0 | The paper is a review of tiotropium bromide, and methylscopolamine is only mentioned as a radioligand in in vitro receptor binding assays, not as the subject of a pharmacokinetic study. |
| popPK | Keller_2015 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using methylscopolamine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PD | Keller_2015 | not_relevant | 0 | 0 | The paper reports in vitro equilibrium binding affinities (pIC50) and allosteric modulation parameters (pEC50,diss) for new ligands, not pharmacodynamic exposure-response or dose-response relationships for methylscopolamine. |
| popPK | Kukhtina_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study of snake venom proteins using methylscopolamine only as a radioligand for binding assays, not a pharmacokinetic study of the drug. |
| PD | Kukhtina_2000 | not_relevant | 0 | 0 | The paper reports binding affinities (IC50) for cobra venom proteins, not a pharmacodynamic exposure-response relationship for the drug methylscopolamine. |
| popPK | Kurjak_1999 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay using methylscopolamine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PD | Kurjak_1999 | not_relevant | 0 | 0 | The paper reports radioligand binding affinity (Kd, Bmax) and functional antagonist potency (pIC50) for methylscopolamine, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug itself. |
| popPK | Lameh_1992 | irrelevant | 0 | 0 | The study is a mechanistic investigation of muscarinic receptor internalization in cell lines, using methylscopolamine only as a radioligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Lameh_1992 | not_relevant | 3 | 2 | The paper reports an EC50 for carbachol (not methylscopolamine) and qualitative internalization percentages, but lacks a formal PD model or extractable concentration-effect curve for methylscopolamine. |
| popPK | Lepor_1984 | irrelevant | 0 | 0 | The study is a receptor binding assay (in-vitro) characterizing muscarinic receptors, not a pharmacokinetic study reporting disposition parameters for methylscopolamine. |
| PD | Lepor_1984 | not_relevant | 3 | 2 | The paper reports receptor binding affinity (Kd) and density (Bmax) for a radioligand, which are pharmacological binding parameters, not a pharmacodynamic exposure-response or dose-response relationship for drug effect. |
| popPK | Liles_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscarinic receptor internalization using methylscopolamine only as a radioligand for binding assays, not a pharmacokinetic study. |
| PD | Liles_1986 | not_relevant | 2 | 2 | The paper reports a single EC50 value for carbachol-induced PKC translocation, not for methylscopolamine, and does not provide a concentration-effect curve or PD model for methylscopolamine. |
| popPK | Maeda_1990 | irrelevant | 0 | 0 | The study is a pharmacological investigation of penile erection mechanisms in rats where methylscopolamine is used only as a negative control/comparator, with no pharmacokinetic parameters reported. |
| PD | Maeda_1990 | not_relevant | 0 | 0 | The paper studies pilocarpine, amantadine, and apomorphine; methylscopolamine is only mentioned as a negative control that did not antagonize erections, with no PD parameters reported for it. |
| popPK | Michal_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and signaling in CHO cells, not a pharmacokinetic study of methylscopolamine disposition. |
| PD | Michal_2009 | not_relevant | 3 | 2 | The paper reports qualitative changes in Emax and affinity for M2 receptors due to cholesterol modulation, but does not provide a specific exposure-response or dose-response curve for methylscopolamine with extractable numeric PD parameters (e.g., specific EC50/Emax values for NMS). |
| popPK | Murali_1988 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological investigation of receptor binding and smooth muscle contractility, not a pharmacokinetic study reporting disposition parameters for methylscopolamine. |
| popPK | Olianas_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of clozapine's effects on muscarinic receptors, using methylscopolamine only as a radioligand for binding assays, and contains no pharmacokinetic data. |
| PD | Olianas_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacology of clozapine, not methylscopolamine; methylscopolamine is only mentioned as a radioligand ([3H]-NMS) for binding assays. |
| popPK | Olianas_2000 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay using methylscopolamine as a radioligand, not a pharmacokinetic study. |
| PD | Olianas_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacology of muscarinic toxin 7 (MT-7) and its interaction with methylscopolamine (NMS) binding, but does not report a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine itself. |
| popPK | Pelat_1999 | irrelevant | 0 | 0 | Methylscopolamine is used as a pharmacological probe to assess M2-cholinoceptor function, not as the subject of a pharmacokinetic study. |
| popPK | Pitschner_1988 | irrelevant | 0 | 0 | The study investigates the receptor subtype selectivity of pirenzepine, using N-methylscopolamine only as a radioligand for in vitro M2 receptor assays, not as the subject drug for PK analysis. |
| popPK | Potter_1989 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using [3H]N-methylscopolamine as a radioligand, not a pharmacokinetic study of methylscopolamine disposition. |
| PD | Potter_1989 | not_relevant | 3 | 2 | The paper reports in vitro binding affinity (IC50) and allosteric modulation parameters for THA, not a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine. |
| popPK | Raufman_2002 | irrelevant | 0 | 0 | Methylscopolamine is used only as a radioligand for binding assays, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Rocha_2015 | irrelevant | 0 | 0 | The study uses methylscopolamine only as a radioligand for receptor binding assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Rocha_2015 | not_relevant | 0 | 0 | The paper reports concentration-response data for bethanechol and binding affinity for methylscopolamine, but does not report a pharmacodynamic (exposure-response) relationship for methylscopolamine itself. |
| popPK | Rupniak_1994 | irrelevant | 0 | 0 | The paper studies epibatidine, and methylscopolamine is used only as a radioligand for binding assays, not as the subject drug for PK analysis. |
| PD | Rupniak_1994 | not_relevant | 0 | 0 | The paper studies epibatidine, not methylscopolamine; methylscopolamine is only used as a radioligand for binding assays. |
| popPK | Scherrer_1997 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Scherrer_1997 | not_relevant | 0 | 0 | The paper focuses on glucocorticoid modulation of receptors in guinea pig lung and does not report pharmacodynamic or exposure-response data for methylscopolamine. |
| popPK | Sethy_1990 | irrelevant | 2 | 0 | The study uses methylscopolamine as a comparator/probe to demonstrate poor blood-brain barrier penetration in mice, rather than reporting quantitative disposition parameters (CL, V, etc.) for methylscopolamine itself. |
| popPK | Shivnaraine_2012 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and allosteric cooperativity analysis, not a pharmacokinetic study reporting disposition parameters. |
| PD | Shivnaraine_2012 | not_relevant | 0 | 0 | The paper describes receptor binding kinetics and allosteric cooperativity (Hill coefficients) for gallamine, not a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine. |
| popPK | Smith_2016 | irrelevant | 0 | 0 | The study characterizes a novel M1 muscarinic receptor radioligand (PT-1284) and uses methylscopolamine (NMS) only as a reference ligand for binding assays, not as the subject of pharmacokinetic analysis. |
| PD | Smith_2016 | not_relevant | 0 | 0 | The paper characterizes a radioligand for M1 PAMs and reports binding/functional assay parameters (EC50, Kd) for the ligand and agonists, but does not report a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine. |
| popPK | Sohn_1997 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of imipramine on the micturition reflex in rats, using methylscopolamine only as a comparator agent, and reports no pharmacokinetic parameters. |
| PD | Sohn_1997 | not_relevant | 2 | 1 | The paper mentions methylscopolamine only as a comparator agent to demonstrate central muscarinic antagonism, without providing specific numeric dose-response parameters or concentration-effect data for it. |
| popPK | Soukup_2009 | irrelevant | 0 | 0 | The paper studies methylacridinium as the subject drug, using methylscopolamine only as a radioligand for binding assays, and reports no pharmacokinetic parameters for methylscopolamine. |
| PD | Soukup_2009 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for enzyme inhibition and receptor binding, but does not provide an in vivo exposure-response or dose-response relationship for methylscopolamine itself. |
| popPK | Tang_1999 | irrelevant | 0 | 0 | The study investigates the toxicological effects of chlorpyrifos on cholinesterase and receptor density, using methylscopolamine only as a radioligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| popPK | Tanito_2001 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay using methylscopolamine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| PD | Tanito_2001 | not_relevant | 0 | 0 | The paper studies the interaction of edrophonium with muscarinic receptors using methylscopolamine (NMS) only as a radioligand for binding assays, not as the drug of interest for a pharmacodynamic exposure-response relationship. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Tränkle_1996 | not_relevant | 0 | 0 | The paper focuses on the discovery of allosteric modulators for muscarinic receptors and does not report pharmacodynamic or exposure-response data for methylscopolamine. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay using N-methylscopolamine as a reference ligand, not a pharmacokinetic study of methylscopolamine disposition. |
| PD | Tränkle_1998 | not_relevant | 3 | 4 | The paper reports binding affinities (pKi, KD) and allosteric stabilization potencies (EC50,diss) for a radioligand and modulators, which are pharmacological/binding parameters, not pharmacodynamic (exposure-response) parameters for the drug methylscopolamine itself. |
| popPK | Verspohl_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay using methylscopolamine as a radioligand, not a pharmacokinetic study of the drug's disposition. |
| popPK | Wellstein_1988 | irrelevant | 0 | 0 | The study focuses on atropine dose-response and receptor binding, using N-methylscopolamine only as an in vitro radioligand, not as the subject drug for PK analysis. |
| popPK | Wess_1993 | irrelevant | 0 | 0 | The study is an in-vitro mutational analysis of the m3 muscarinic receptor using [3H]N-methylscopolamine as a radioligand, not a pharmacokinetic study of methylscopolamine disposition. |
| PD | Wess_1993 | not_relevant | 1 | 1 | The paper focuses on mutagenesis of the m3 muscarinic receptor and reports binding affinities and relative functional activity (Emax) for mutants, but does not provide a pharmacokinetic or exposure-response model for methylscopolamine in a physiological system. |
| popPK | Wong_1986 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using methylscopolamine as a radioligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wong_1986 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding kinetics and affinity states, not pharmacodynamic exposure-response or dose-response relationships in a physiological or clinical context. |
| popPK | Xu_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and signaling assay using methylscopolamine as a radioligand, not a pharmacokinetic study. |
| PD | Xu_1987 | not_relevant | 0 | 0 | The paper reports pharmacological parameters (EC50, Ki, Kd) for carbachol and binding affinity for methylscopolamine, but does not report a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine itself. |
| popPK | Yu_1994 | irrelevant | 0 | 0 | Methylscopolamine is used only as a radiolabeled ligand in a receptor binding assay, not as the subject of a pharmacokinetic study. |
| PD | Yu_1994 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Evodiae Fructus (EF), not methylscopolamine; methylscopolamine is only used as a radioligand for receptor binding assays. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction extraction using neural networks and contains no pharmacokinetic data for methylscopolamine. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and contains no pharmacodynamic data or analysis for methylscopolamine. |
| popPK | Zlotos_2006 | irrelevant | 0 | 0 | The study is a medicinal chemistry/structure-activity relationship paper investigating binding affinities of novel analogs, not a pharmacokinetic study of methylscopolamine. |
| PD | Zlotos_2006 | not_relevant | 0 | 0 | The paper reports binding affinities (Ki, EC50,diss) for novel compounds, not a pharmacodynamic exposure-response or dose-response relationship for methylscopolamine. |
| popPK | de_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptors in rat brain tissue, not a pharmacokinetic study of methylscopolamine. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster abstract section and contains no scientific content, data, or mention of methylscopolamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
