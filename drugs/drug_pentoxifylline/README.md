<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;pentoxifylline&quot;}]"></div>

# pentoxifylline

- **generic name:** pentoxifylline
- **ATC codes:** `C04AD03`
- **DrugBank:** [DB00806](https://go.drugbank.com/drugs/DB00806) · **PubChem:** [CID 4740](https://pubchem.ncbi.nlm.nih.gov/compound/4740)
- **molar mass:** 278.307 g/mol (C13H18N4O3) — DrugBank
- **groups:** approved, investigational

## About

Pentoxifylline is a vasodilator and phosphodiesterase inhibitor used for blood-flow problems such as peripheral vascular disease, intermittent claudication, arteriosclerosis, and diabetic vascular and nerve complications. It is an approved medicine, though not authorised centrally in the European Union, and has also been studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416331](https://www.wikidata.org/wiki/Q416331) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:14 | 7:09 | 0/0/0 | 0/1/1 | 0/0/1 | 146,552/6,291 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/10 | 6/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wyska_2010_TNF_alpha](drugs/drug_pentoxifylline/pd_Wyska_2010_TNF_alpha.md) | TNF-alpha ← pentoxifylline · indirect response — drug inhibits the production of TNF-alpha | — | Wyska E, Pharmacokinetic-pharmacodynamic modelin…, Pharmacology (2010) | [10.1159/000288734](https://doi.org/10.1159/000288734) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Peterson_1994_fibroproliferation](drugs/drug_pentoxifylline/pd_Peterson_1994_fibroproliferation.md) | fibroproliferation ← pentoxifylline · direct Emax (saturable) effect | — | Peterson TC et al., In vitro effect of platelet-derived gro…, Immunopharmacology (1994) | [10.1016/0162-3109(94)90061-2](https://doi.org/10.1016/0162-3109(94)90061-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP1A2** | `Q17` · AUC∞ | metabolism | [Guo_2026](drugs/drug_pentoxifylline/pgx_Guo_2026_CYP1A2_Q17.md) | Guo L et al., Effects of CYP1A2 genetic polymorphisms…, BMC pharmacology & toxicolo… (2026) | [10.1186/s40360-026-01106-2](https://doi.org/10.1186/s40360-026-01106-2) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pentoxifylline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), NT5E (inhibitor), Phosphodiesterase enzymes (inhibitor), TNF (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 151 matched, 124 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salman_2019.pdf` | Salman S et al., Effects of maturation and size on popul…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13775](https://doi.org/10.1111/bcp.13775) | [30281170](https://pubmed.ncbi.nlm.nih.gov/30281170) | The paper describes a population PK study of pentoxifylline in preterm infants, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text, only qualitative trends and relative changes. |
| `Wyska_2007.pdf` | Wyska E et al., Pharmacokinetic modelling of pentoxifyl…, The Journal of pharmacy and… (2007) | popPK | 10 | [10.1211/jpp.59.4.0003](https://doi.org/10.1211/jpp.59.4.0003) | [17430632](https://pubmed.ncbi.nlm.nih.gov/17430632) | The study reports a compartmental PK model for pentoxifylline in mice, but the specific numeric parameter values are not present in the provided evidence. |
| `Wyska_2006.pdf` | Wyska E et al., Interconversion and tissue distribution…, Chirality (2006) | popPK | 9 | [10.1002/chir.20299](https://doi.org/10.1002/chir.20299) | [16721727](https://pubmed.ncbi.nlm.nih.gov/16721727) | The study reports quantitative PK parameters (clearances, AUC ratios) for pentoxifylline in mice, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only relative comparisons and AUC ratios. |
| `Wyska_2010.pdf` | Wyska E, Pharmacokinetic-pharmacodynamic modelin…, Pharmacology (2010) | popPK | 8 | [10.1159/000288734](https://doi.org/10.1159/000288734) | [20389149](https://pubmed.ncbi.nlm.nih.gov/20389149) | The study reports a compartmental PK model for pentoxifylline in mice, but specific numeric disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only PD parameters and relative comparisons. |
| `Leclerc_1995.pdf` | Leclerc NE et al., Inhibitors of phosphodiesterase (pentox…, Journal of cardiovascular p… (1995) | pd | 5 | [10.1097/00005344-199500252-00019](https://doi.org/10.1097/00005344-199500252-00019) | [8699870](https://www.ncbi.nlm.nih.gov/pubmed/8699870) | metadata signals extractable PD data (EC50) |
| `Pal_2019.pdf` | Pal S et al., Reversal of Osteopenia in Ovariectomize…, Calcified tissue internatio… (2019) | pd | 5 | [10.1007/s00223-019-00567-4](https://doi.org/10.1007/s00223-019-00567-4) | [31175387](https://www.ncbi.nlm.nih.gov/pubmed/31175387) | metadata signals extractable PD data (EC50) |
| `Tuvia_1999.pdf` | Tuvia S et al., Beta-adrenergic agonists regulate cell…, The Journal of physiology (1999) | pd | 5 | [10.1111/j.1469-7793.1999.0781u.x](https://doi.org/10.1111/j.1469-7793.1999.0781u.x) | [10200425](https://www.ncbi.nlm.nih.gov/pubmed/10200425) | metadata signals extractable PD data (EC50) |
| `Kapui_1992.pdf` | Kapui Z et al., Comparative studies of drotaverine--ace…, Thrombosis research (1992) | pd | 4 | [10.1016/0049-3848(92)90045-c](https://doi.org/10.1016/0049-3848(92)90045-c) | [1519228](https://www.ncbi.nlm.nih.gov/pubmed/1519228) | metadata signals extractable PD data (IC50) |
| `Morita_2016.pdf` | Morita M et al., Inhibition of plasma lipid oxidation in…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.10.033](https://doi.org/10.1016/j.bmcl.2016.10.033) | [27777006](https://www.ncbi.nlm.nih.gov/pubmed/27777006) | metadata signals extractable PD data (IC50) |
| `Wen_2021.pdf` | Wen Z et al., Inhibition of human sperm motility and…, Ecotoxicology and environme… (2021) | pd | 4 | [10.1016/j.ecoenv.2021.112281](https://doi.org/10.1016/j.ecoenv.2021.112281) | [33984659](https://www.ncbi.nlm.nih.gov/pubmed/33984659) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T20:11:18.186538+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdin_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of pentoxifylline as an NF-κB inhibitor to overcome multidrug resistance in cancer cells, but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ahmad_2017 | irrelevant | 0 | 0 | The study focuses on the microbial biotransformation of methasterone and its immunomodulatory effects, using pentoxifylline only as a positive control for TNF-α inhibition without reporting any pharmacokinetic parameters. |
| PD | Ahmad_2017 | not_relevant | 3 | 5 | The paper reports an IC50 for pentoxifylline (94.8 μg/mL) as a standard comparator in a TNF-α inhibition assay, but it is not a PK/PD or exposure-response study of pentoxifylline itself; it is a bioassay of methasterone metabolites. |
| popPK | Ali_2026 | irrelevant | 1 | 0 | The paper is a formulation and pharmacodynamic study of pentoxifylline novasomes that does not report original quantitative pharmacokinetic parameters (CL, V, ka) for the drug, only citing general bioavailability and half-life from literature. |
| PD | Ali_2026 | not_relevant | 2 | 1 | The study reports qualitative in-vivo efficacy (reduction in biomarkers) comparing formulations but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50). |
| popPK | Alkharfy_2000 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic effects on cytokines and does not report any quantitative pharmacokinetic parameters for pentoxifylline. |
| PD | Alkharfy_2000 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses the immunomodulatory effects of pentoxifylline but does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Ambrus_1981 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic effects of pentoxifylline on platelet aggregation and tumor metastasis, reporting no pharmacokinetic parameters. |
| popPK | Ambrus_1990 | irrelevant | 2 | 0 | The study focuses on dose-response effects on erythrocyte filterability and mentions plasma levels but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for pentoxifylline. |
| popPK | Ambrus_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of pentoxifylline on thrombolysis and platelet aggregation, not on pharmacokinetic disposition parameters. |
| PD | Ambrus_1994 | not_relevant | 1 | 0 | The text describes qualitative mechanisms and potentiation effects of pentoxifylline on thrombolysis but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Badger_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of TNF inhibition in a murine model and does not report any pharmacokinetic parameters for pentoxifylline. |
| PGx | Barancik_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of pentoxifylline's effect on multidrug resistance in cell lines, not the impact of human gene variants on pentoxifylline's pharmacokinetics or pharmacodynamics. |
| popPK | Berkenboom_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular toxicity and does not report pharmacokinetic parameters for pentoxifylline. |
| popPK | Beshay_2001 | irrelevant | 0 | 0 | The study is an in vitro/in vivo mechanistic investigation of pharmacodynamic effects (NO suppression) and does not report pharmacokinetic parameters for pentoxifylline. |
| popPK | Bhat_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant properties and does not report any pharmacokinetic parameters for pentoxifylline. |
| PD | Bhat_2001 | not_relevant | 3 | 4 | The paper reports in vitro biochemical IC50 values for radical scavenging, which are not pharmacodynamic exposure-response relationships in a biological system. |
| popPK | Boĭko_1992 | irrelevant | 2 | 0 | The text describes a pharmacokinetic study but contains no quantitative parameter values (CL, V, t1/2, etc.) in the provided evidence. |
| PD | Boĭko_1992 | not_relevant | 2 | 1 | The text describes qualitative differences in antiaggregation effects and notes a lack of correlation between concentration and effect, but provides no numeric PD parameters or extractable dose-response data. |
| popPK | Cardinaux_2026 | irrelevant | 0 | 0 | The study is an in vitro collagen gel contraction assay assessing the relaxing effect of pentoxifylline on myofibroblasts, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Cardinaux_2026 | not_relevant | 2 | 2 | The study reports a single fixed concentration (12 µg/mL) of pentoxifylline in an in vitro assay, providing only a qualitative comparison of effect magnitude against controls and other drugs, without a dose-response curve or numeric PD parameters (e.g., EC50, Emax). |
| PGx | Chapman_2003 | not_relevant | 0 | 0 | The paper is a review of cilostazol and does not report pharmacogenomic effects on pentoxifylline PK/PD parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| PD | Chase_2012 | not_relevant | 0 | 0 | The provided text is a conference session header and file link, containing no scientific content, data, or pharmacodynamic analysis for pentoxifylline. |
| popPK | Clissold_1987 | irrelevant | 0 | 0 | The paper is a review of buflomedil, and pentoxifylline is mentioned only as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| PD | Clissold_1987 | not_relevant | 1 | 0 | The text is a qualitative review of buflomedil that mentions pentoxifylline only as a comparator for clinical efficacy, without providing any numeric PD parameters or exposure-response data for pentoxifylline. |
| popPK | Cottam_1996 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on pentoxifylline analogues for anti-inflammatory activity, containing no pharmacokinetic parameters. |
| popPK | Dantas_2021 | irrelevant | 0 | 0 | The paper is a review of okra mucilage and contains no information regarding pentoxifylline or its pharmacokinetics. |
| PD | Dantas_2021 | not_relevant | 0 | 0 | The paper is a review on okra mucilage and does not mention pentoxifylline or report any pharmacodynamic data. |
| popPK | De-Oliveira_2015 | irrelevant | 0 | 0 | The study investigates the modulation of CYP2A5 enzyme activity by LPS and pentoxifylline, with pentoxifylline serving as a pharmacological inhibitor rather than the subject of pharmacokinetic analysis. |
| PD | De-Oliveira_2015 | not_relevant | 0 | 0 | The paper investigates the dose-response of LPS on CYP2A5 activity and the modulatory effect of pentoxifylline, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for pentoxifylline itself. |
| popPK | Doherty_1991 | irrelevant | 0 | 0 | The study is mechanistic (in-vitro/in-vivo TNF transcription) and does not report pharmacokinetic parameters for pentoxifylline. |
| popPK | Dua_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiproliferative effects in cell cultures and does not report pharmacokinetic parameters. |
| popPK | El-Lakkany_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic/therapeutic investigation in mice and does not report any quantitative pharmacokinetic parameters for pentoxifylline. |
| PD | El-Lakkany_2007 | not_relevant | 2 | 1 | The study reports qualitative outcomes (worm burden, fibrosis) for fixed dose groups but does not provide concentration-effect data, PK parameters, or numeric PD model parameters (e.g., Emax, EC50). |
| popPK | Escolar_2012 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for Duchenne muscular dystrophy and does not report any pharmacokinetic parameters for pentoxifylline. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734 in mice, not pentoxifylline. |
| PD | Gapińska_2025 | not_relevant | 0 | 0 | The paper investigates SSR504734, not pentoxifylline, and does not report a PD model or numeric exposure-response parameters for the target drug. |
| popPK | Graninger_1995 | irrelevant | 0 | 0 | The paper is a review discussing the therapeutic potential of pentoxifylline in SIRS and does not report any quantitative pharmacokinetic parameters. |
| PD | Graninger_1995 | not_relevant | 1 | 0 | The text is a qualitative review discussing the potential of pentoxifylline in SIRS and mentions the need for dose-response studies, but it does not report any specific numeric PD parameters, concentration-effect data, or PK/PD models. |
| popPK | Grossmann_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of venodilatory potency (ED50) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for pentoxifylline. |
| popPK | Hall_1995 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of boron derivatives where pentoxifylline is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| PD | Hall_1995 | not_relevant | 0 | 0 | The paper focuses on boron derivatives and only mentions pentoxifylline as a qualitative comparator without providing any exposure-response data or numeric PD parameters for it. |
| popPK | Hansen_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of vasorelaxant effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Honess_1995 | irrelevant | 0 | 0 | The study focuses on tumor perfusion and oxygenation (pO2) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Hung_2008 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of pentoxifylline in preventing peritoneal fibrosis and does not report any pharmacokinetic parameters. |
| PD | Hung_2008 | not_relevant | 2 | 1 | The study reports qualitative and semi-quantitative effects of fixed doses/concentrations (e.g., 72-81% reduction, P-values) but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (Emax, EC50) for pentoxifylline. |
| popPK | Jankiewicz_2007 | irrelevant | 0 | 0 | The paper is a review of caffeine interactions with antiepileptic drugs, and pentoxifylline is only mentioned as a comparator methylxanthine without any pharmacokinetic data. |
| PD | Jankiewicz_2007 | not_relevant | 0 | 0 | The paper discusses caffeine's interaction with antiepileptic drugs and mentions pentoxifylline only as a related methylxanthine in the background, without providing any PD data or parameters for pentoxifylline. |
| popPK | Kapui_1992 | irrelevant | 0 | 0 | The study focuses on in-vitro and ex-vivo pharmacodynamic effects (platelet aggregation) rather than pharmacokinetic disposition parameters. |
| popPK | Kaya_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of contractile responses in rat ileum, not a pharmacokinetic study, and reports no disposition parameters for pentoxifylline. |
| PD | Kaya_2002 | not_relevant | 3 | 2 | The study reports qualitative changes in Emax and pD2 values for contractile responses but does not provide the specific numeric PD parameters or concentration-effect curves required for extraction. |
| popPK | Keshavarzi_2024 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of anticonvulsant effects in mice and does not report any pharmacokinetic parameters for pentoxifylline. |
| PD | Keshavarzi_2024 | not_relevant | 3 | 2 | The study reports dose-response effects (e.g., threshold changes at specific doses) but lacks plasma concentration data or a formal PK/PD model to derive exposure-response parameters like EC50 or Emax. |
| popPK | Kurul_2021 | irrelevant | 0 | 0 | This is a study protocol for a dose-finding trial that plans to measure PK, but it does not report any quantitative pharmacokinetic parameter values. |
| PD | Kurul_2021 | not_relevant | 0 | 0 | The paper is a protocol for a future dose-finding trial and does not report any results, data, or numeric PD parameters. |
| popPK | Laferrière_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral analysis of topical analgesic combinations in an animal model, not a pharmacokinetic study, and reports no disposition parameters for pentoxifylline. |
| popPK | Leclerc_1995 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Leclerc_1995 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| PGx | Lee_1997 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and identifies CYP1A2 as the metabolizing enzyme, but it does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Luke_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in rats reporting prothrombin time ratios, with no pharmacokinetic parameters (CL, V, t1/2) for pentoxifylline reported. |
| PD | Luke_1986 | not_relevant | 1 | 0 | The paper reports a qualitative lack of interaction based on mean group comparisons of prothrombin time ratios, but provides no concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maderazo_1990 | irrelevant | 2 | 0 | The study focuses on efficacy and toxicity in mice, and while it mentions pharmacokinetic characteristics, no quantitative PK parameters (CL, V, t1/2 values) are provided in the evidence. |
| popPK | Mah_1993 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and bacterial clearance in an animal model, and while it mentions analyzing pentoxifylline content, no quantitative PK parameters (CL, V, t1/2) are reported in the evidence. |
| PD | Mah_1993 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends (reduced bacterial counts and cytokines) and confirms therapeutic drug levels, but it does not provide a formal PK/PD model or numeric PD parameters (e.g., EC50, Emax) that can be extracted. |
| popPK | Makalani_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of senotherapeutic effects in cancer spheroids and does not report any pharmacokinetic parameters for pentoxifylline. |
| PD | Makalani_2026 | not_relevant | 1 | 0 | The study is a mechanistic in vitro investigation using fixed concentrations (50% IC50) to assess senotherapeutic effects, lacking any exposure-response modeling, dose-response curve fitting, or derivation of numeric PD parameters like Emax or EC50 for pentoxifylline. |
| popPK | Meskini_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of phosphodiesterase inhibition profiles and does not report any pharmacokinetic disposition parameters for pentoxifylline. |
| popPK | Mika_2022 | irrelevant | 0 | 0 | The study investigates histamine H3 receptor ligands (KSK-60 and KSK-74) for anti-obesity effects in rats and does not involve pentoxifylline or its pharmacokinetics. |
| PD | Mika_2022 | not_relevant | 0 | 0 | The paper studies KSK-74, not pentoxifylline, and reports only qualitative efficacy at a single dose without numeric PD parameters. |
| popPK | Mohamed_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for pentoxifylline. |
| popPK | Morita_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant properties, not a pharmacokinetic study, and contains no PK parameters for pentoxifylline. |
| PD | Morita_2016 | not_relevant | 1 | 0 | The paper reports that pentoxifylline did not act as a radical scavenger and provides no numeric PD parameters or concentration-effect data for it. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for pentoxifylline. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain any specific pharmacodynamic or exposure-response data for pentoxifylline. |
| popPK | Osterreicher_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of radiation pneumonitis in rats where pentoxifylline is used as a therapeutic agent, and no pharmacokinetic parameters are reported. |
| PD | Osterreicher_2004 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response for radiation injury and a qualitative effect of pentoxifylline on histological markers, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship for the drug. |
| popPK | Pal_2019 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Pal_2019 | not_relevant | 0 | 0 | The paper reports qualitative histological and biochemical outcomes (bone density, angiogenesis) in an animal model but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., EC50, Emax) for pentoxifylline. |
| popPK | Pal_2019_2 | irrelevant | 1 | 0 | The study is a pharmacodynamic investigation of bone restoration in rabbits, reporting only a single plasma concentration point rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic adverse effect of ranolazine and mentions CYP phenotyping for ranolazine metabolism, but it does not report a pharmacogenomic effect on the PK or PD of pentoxifylline. |
| popPK | Park_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pentoxifylline's effect on cytokine production in macrophages and does not report any pharmacokinetic parameters. |
| popPK | Peterson_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay assessing the effect of pentoxifylline on fibroblast proliferation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Peterson_1998 | not_relevant | 0 | 0 | The paper investigates drug-metabolizing enzymes in rat liver myofibroblasts and does not report any human gene variants or genotypes affecting pentoxifylline PK/PD. |
| popPK | Pinzani_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pentoxifylline's effect on cell signaling and does not report pharmacokinetic parameters. |
| popPK | Prabhakar_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytokine inhibition and does not report any pharmacokinetic parameters for pentoxifylline. |
| PGx | Prandota_2005 | not_relevant | 0 | 0 | The paper is a review discussing the general role of cytokines and genetic polymorphisms in drug-induced hepatotoxicity; it mentions pentoxifylline only as a potential therapeutic agent to reduce inflammation, not as the subject of a pharmacogenomic study on its own PK/PD parameters. |
| popPK | Pérez-Ruixo_2013 | irrelevant | 0 | 0 | The paper is a meta-analysis of erythropoiesis-stimulating agents in dialysis patients and does not involve pentoxifylline or its pharmacokinetics. |
| PD | Pérez-Ruixo_2013 | not_relevant | 0 | 0 | The paper is a meta-analysis of erythropoiesis-stimulating agents (ESAs) in dialysis patients and does not involve pentoxifylline or report any pharmacodynamic parameters. |
| popPK | Ramallo_2013 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory and protective effects of pentoxifylline on lung injury in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Ramallo_2013 | not_relevant | 2 | 1 | The study compares a single dose of pentoxifylline against controls in two age groups but does not perform a dose-response or exposure-response analysis, nor does it report numeric PD parameters like Emax or EC50. |
| popPK | Rao_1999 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice focusing on anxiety-like behavior and drug interactions, with no pharmacokinetic parameters reported. |
| PD | Rao_1999 | not_relevant | 3 | 2 | The study reports qualitative shifts in the diazepam dose-response curve and behavioral changes at fixed doses of pentoxifylline, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship for pentoxifylline itself. |
| popPK | Rice_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on phosphatidic acid inhibition and endotoxic shock, reporting IC50 values for enzyme inhibition rather than pharmacokinetic disposition parameters (CL, V, t1/2) for pentoxifylline. |
| popPK | Richard_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of immunomodulatory effects and does not report any pharmacokinetic parameters for pentoxifylline. |
| popPK | Ruan_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pentoxifylline's anti-inflammatory effects in macrophage cells and does not report any pharmacokinetic parameters. |
| popPK | Ruddock_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular and gastrointestinal effects, reporting EC50 values for pharmacodynamic effects rather than pharmacokinetic disposition parameters. |
| popPK | Salman_2019 | relevant | 10 | 2 | The paper describes a population PK study of pentoxifylline in preterm infants, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text, only qualitative trends and relative changes. |
| PD | Salman_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of pentoxifylline and its metabolites, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| PGx | Schweitzer_2011 | not_relevant | 0 | 0 | The paper is a case report on hearing loss following polysubstance abuse and does not report any pharmacogenomic effects on the PK or PD of pentoxifylline. |
| popPK | Selli_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of pentoxifylline's enzyme inhibition properties (IC50/Ki) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Selli_2024 | irrelevant | 0 | 0 | The paper is a correction to an in-vitro pharmacodynamic study and does not report quantitative pharmacokinetic disposition parameters for pentoxifylline. |
| PD | Selli_2024 | not_relevant | 0 | 0 | The text is a correction notice for a typo in the Methods section of a previous paper and contains no data, results, or PD parameters. |
| popPK | Semmler_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of TNF-alpha suppression and PDE inhibition, reporting no pharmacokinetic parameters for pentoxifylline. |
| popPK | Shtok_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on hemodynamic and rheographic effects, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for pentoxifylline. |
| PD | Shtok_1982 | not_relevant | 2 | 1 | The paper describes clinical outcomes and qualitative vascular effects (vasodilation/vasoconstriction) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters like Emax or EC50. |
| popPK | Sinha_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cAMP accumulation and TNF-alpha suppression, not a pharmacokinetic study reporting disposition parameters for pentoxifylline. |
| popPK | Stanek_1995 | irrelevant | 0 | 0 | The paper is a clinical recommendation regarding drug interactions with myocardial imaging, not a pharmacokinetic study, and contains no quantitative PK parameters for pentoxifylline. |
| PD | Stanek_1995 | not_relevant | 1 | 0 | The text is a qualitative discussion/recommendation regarding potential drug interactions and lacks any numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Svensson_1995 | irrelevant | 0 | 0 | The paper is an immunological study investigating cytokine expression in macrophages, where pentoxifylline is used only as a pharmacological inhibitor/comparator, and no pharmacokinetic parameters are reported. |
| PD | Svensson_1995 | not_relevant | 1 | 0 | The paper explicitly states that pentoxifylline did not inhibit bacteria-induced cytokine expression, and no numeric PD parameters or dose-response curves for pentoxifylline are provided. |
| popPK | Szombathelyi_1991 | irrelevant | 0 | 0 | The study focuses on the vasodilator activity of vintoperol, using pentoxifylline only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| PD | Szombathelyi_1991 | not_relevant | 2 | 1 | The paper compares vintoperol to pentoxifylline using qualitative potency statements and single-dose efficacy data in mice, but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters (e.g., ED50, Emax) for pentoxifylline. |
| popPK | Tsimmerman_2001 | irrelevant | 0 | 0 | The paper is a clinical study on the treatment of gastroduodenal erosions using pentoxifylline (Trental) as a therapeutic agent, and it does not report any pharmacokinetic parameters. |
| PD | Tsimmerman_2001 | not_relevant | 1 | 0 | The paper reports clinical efficacy percentages for pentoxifylline (Trental) but lacks any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Tuvia_1999 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Tuvia_1999 | not_relevant | 0 | 0 | The paper focuses on beta-adrenergic agonists and erythrocyte membrane fluctuations, with no mention of pentoxifylline or its pharmacodynamic parameters. |
| popPK | Ueno_2011 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects on platelet function, not pharmacokinetic parameters. |
| PD | Ueno_2011 | not_relevant | 2 | 0 | The study reports only qualitative comparisons of platelet function endpoints (p-values) between groups and over time, without providing numeric concentration-effect curves, Emax/EC50 parameters, or individual-level PD data. |
| popPK | Uneyama_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of caffeine and xanthine derivatives on neuronal chloride currents, not a pharmacokinetic study of pentoxifylline. |
| popPK | Vandenburgh_2009 | irrelevant | 0 | 0 | The study is an in-vitro functional assay for Duchenne muscular dystrophy where pentoxifylline is used only as a co-administered compound to test drug interactions, with no pharmacokinetic parameters reported. |
| PD | Vandenburgh_2009 | not_relevant | 1 | 0 | Pentoxifylline is only mentioned qualitatively as part of a deleterious drug interaction; no numeric concentration-effect data or PD parameters are reported for it. |
| popPK | Wang_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular function and endothelial response, not a pharmacokinetic study, and reports no disposition parameters for pentoxifylline. |
| popPK | Ward_1987 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without providing original quantitative disposition parameter values in the evidence. |
| PD | Ward_1987 | not_relevant | 1 | 0 | The text is a clinical review summarizing therapeutic efficacy and general pharmacodynamic properties (e.g., RBC deformability) without providing specific numeric PD parameters (Emax, EC50) or quantitative exposure-response data. |
| popPK | Wen_2021 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Wen_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of ziram's effect on sperm motility, not the pharmacodynamics of pentoxifylline. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The study investigates the toxicological effects of thiram on human sperm, using pentoxifylline only as a negative control agent, and reports no pharmacokinetic parameters for pentoxifylline. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of thiram on sperm motility; pentoxifylline is only mentioned as a co-treatment that failed to prevent thiram-induced effects, with no PD or exposure-response analysis performed for pentoxifylline. |
| popPK | Williams_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pentoxifylline's effects on alveolar macrophage function and does not report any pharmacokinetic parameters. |
| popPK | Wyska_2006 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearances, AUC ratios) for pentoxifylline in mice, but specific numeric values for clearance and volume are not explicitly listed in the provided text, only relative comparisons and AUC ratios. |
| popPK | Wyska_2007 | relevant | 10 | 0 | The study reports a compartmental PK model for pentoxifylline in mice, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Wyska_2010 | relevant | 8 | 2 | The study reports a compartmental PK model for pentoxifylline in mice, but specific numeric disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only PD parameters and relative comparisons. |
| popPK | Zherdev_1993 | irrelevant | 2 | 0 | The paper discusses pentoxifylline (Trental) PK in a specific population but the provided evidence contains no quantitative disposition parameters (CL, V, t1/2, etc.), only a recommended dosage. |
| PD | Zherdev_1993 | not_relevant | 2 | 1 | The abstract mentions examining the relationship between PK and platelet aggregation to recommend a dose, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data in the provided text. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, pharmacokinetic or pharmacodynamic analysis, or numeric parameters for pentoxifylline. |
| popPK | Świerczek_2017 | relevant | 9 | 2 | The study reports quantitative PK parameters (V, V/f) for pentoxifylline in rats, but the full table of values (Table 2) is not included in the evidence, only a fragment of the numeric lines. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
