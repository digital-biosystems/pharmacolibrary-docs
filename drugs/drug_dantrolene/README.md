<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03C&quot;,&quot;href&quot;:&quot;atc/M03C.md&quot;},{&quot;label&quot;:&quot;dantrolene&quot;}]"></div>

# dantrolene

- **generic name:** dantrolene
- **ATC codes:** `M03CA01`
- **DrugBank:** [DB01219](https://go.drugbank.com/drugs/DB01219) · **PubChem:** [CID 6914273](https://pubchem.ncbi.nlm.nih.gov/compound/6914273)
- **molar mass:** 314.257 g/mol (C14H10N4O5) — DrugBank
- **groups:** approved, investigational

## About

Dantrolene is a muscle relaxant used to treat spasticity from conditions such as multiple sclerosis, spinal cord injury, or stroke, and is also used for malignant hyperthermia and neuroleptic malignant syndrome. It is an approved medicine and remains in clinical use, with some uses still investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421274](https://www.wikidata.org/wiki/Q421274) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dantrolene | parent | 314.257 | C14H10N4O5 | DrugBank | [6914273](https://pubchem.ncbi.nlm.nih.gov/compound/6914273) | Podranski_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:02 | 11:02 | 0/2/0 | 4/0/0 | 0/0/0 | 306,758/15,219 | einfracz / qwen3.8-27b | 14 | 6/3 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Meyler_1979_reference](drugs/drug_dantrolene/Dantrolene_Meyler1979_reference.md) | — | 1-compartment (no model) | 0 | Meyler WJ et al., The effect of dantrolene sodium on rat…, European journal of pharmac… (1979) | [10.1016/0014-2999(79)90457-6](https://doi.org/10.1016/0014-2999(79)90457-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Podranski_2005_reference](drugs/drug_dantrolene/Dantrolene_Podranski2005_reference.md) | — | 2-compartment (no model) | 3 | Podranski T et al., Compartmental pharmacokinetics of dantr…, Anesthesia and analgesia (2005) | [10.1213/01.ANE.0000184184.40504.F3](https://doi.org/10.1213/01.ANE.0000184184.40504.F3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ashna_2020_RyR2_open_probability](drugs/drug_dantrolene/pd_Ashna_2020_RyR2_open_probability.md) | P o ← Dantrolene · direct sigmoid Emax (Hill) effect | — | Ashna A et al., Phenytoin Reduces Activity of Cardiac R…, Molecular pharmacology (2020) | [10.1124/mol.119.117721](https://doi.org/10.1124/mol.119.117721) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ohnishi_1987_halothane_induced_increment_of_the_permeability](drugs/drug_dantrolene/pd_Ohnishi_1987_halothane_induced_increment_of_the_permeability.md) | halothane-induced increment of the permeability ← dantrolene · direct sigmoid Emax (Hill) effect | — | Ohnishi ST, Effects of halothane, caffeine, dantrol…, Biochimica et biophysica ac… (1987) | [10.1016/0005-2736(87)90422-6](https://doi.org/10.1016/0005-2736(87)90422-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Salinska_2008_3_H_MK_801_binding](drugs/drug_dantrolene/pd_Salinska_2008_3_H_MK_801_binding.md) | [(3)H]MK-801 binding ← dantrolene · inhibition effect | — | Salinska E et al., Dantrolene antagonizes the glycineB sit…, Neuroscience letters (2008) | [10.1016/j.neulet.2007.12.013](https://doi.org/10.1016/j.neulet.2007.12.013) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">pig</span> | [el-Hayek_1992_3H_PN200_110_binding](drugs/drug_dantrolene/pd_el_Hayek_1992_3H_PN200_110_binding.md) | [3H]PN200-110 binding ← dantrolene · direct Emax (saturable) effect | — | el-Hayek R et al., Dantrolene and azumolene inhibit [3H]PN…, Biochemical and biophysical… (1992) | [10.1016/0006-291x(92)91281-t](https://doi.org/10.1016/0006-291x(92)91281-t) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dantrolene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RYR1 (target), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 140 matched, 87 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DiMaio_2011.pdf` | DiMaio Knych HK et al., Pharmacokinetics and metabolism of dant…, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2010.01214.x](https://doi.org/10.1111/j.1365-2885.2010.01214.x) | [21492188](https://pubmed.ncbi.nlm.nih.gov/21492188) | The study reports quantitative pharmacokinetic data for dantrolene in horses, including peak plasma concentrations and time to peak, though specific clearance or volume parameters are not explicitly listed in the provided text excerpt. |
| `Podranski_2005.pdf` | Podranski T et al., Compartmental pharmacokinetics of dantr…, Anesthesia and analgesia (2005) | popPK | 10 | [10.1213/01.ANE.0000184184.40504.F3](https://doi.org/10.1213/01.ANE.0000184184.40504.F3) | [16301243](https://pubmed.ncbi.nlm.nih.gov/16301243) | The study reports specific quantitative compartmental pharmacokinetic parameters (V1, V2, CL) for dantrolene in human adults. |
| `Meyler_1979.pdf` | Meyler WJ et al., The effect of dantrolene sodium on rat…, European journal of pharmac… (1979) | popPK | 8 | [10.1016/0014-2999(79)90457-6](https://doi.org/10.1016/0014-2999(79)90457-6) | [421731](https://pubmed.ncbi.nlm.nih.gov/421731) | The study reports quantitative PK parameters (distribution half-life 1.1 min, elimination half-life 31 min) and a two-compartment model for dantrolene in rats, though specific CL/V/Q values are not explicitly listed. |

<sub>queue written 2026-10-07T03:01:26.341836+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashna_2020 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of dantrolene's effect on RyR2 channels, reporting no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Belousov_1995 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiological investigation of anoxic responses in rat hippocampal neurons where dantrolene is used as a pharmacological tool to block calcium release, not to measure its pharmacokinetic disposition parameters. |
| PGx | Burckhardt_2016 | not_relevant | 1 | 0 | The paper investigates dantrolene's interaction with organic anion transporters (OAT2/OAT3) in vitro but does not report any association between genetic variants or polymorphisms in these transporters and clinical pharmacokinetic or pharmacodynamic parameters. |
| popPK | Conger_1993 | irrelevant | 0 | 0 | Dantrolene is used only as a pharmacological tool in a mechanistic in-vitro study of calcium signaling, with no pharmacokinetic parameters reported. |
| popPK | Crespo_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacological assessment of dantrolene's effect on vascular contraction and oxidative stress, not a pharmacokinetic study. |
| popPK | Dahmani_2004 | irrelevant | 0 | 0 | The paper studies the mechanistic effect of lidocaine on kinase phosphorylation in rat hippocampal slices, using dantrolene only as a control inhibitor, and reports no pharmacokinetic parameters for dantrolene. |
| popPK | Debernardi_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study in rat glioma cells using dantrolene as a pharmacological tool to block calcium release, and it does not report any pharmacokinetic disposition parameters for dantrolene. |
| popPK | Donowitz_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in rat colon, and dantrolene is used only as a pharmacological tool to inhibit calcium release, with no pharmacokinetic parameters reported. |
| PGx | Enokizono_2008 | not_relevant | 3 | 4 | The paper reports altered tissue penetration (Kp) of dantrolene in Bcrp(-/-) mice, which is a mechanistic pharmacokinetic study in an animal knockout model, not a pharmacogenomic study of human gene variants affecting clinical PK/PD parameters. |
| PGx | Famili_2023 | not_relevant | 0 | 0 | The paper discusses a clinical association between RYR1 variants and pancreatitis but does not report pharmacokinetic or pharmacodynamic parameters for dantrolene. |
| popPK | Fernandes_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release in rat brain slices where dantrolene is used only as a comparator agent to test intracellular calcium mobilization, not a pharmacokinetic study. |
| popPK | Fernandes_2004_2 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of dopamine release where dantrolene is used only as a tool compound to test calcium store inhibition, not as the subject of a pharmacokinetic analysis. |
| PGx | Gepdiremen_2002 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of dantrolene in a cell culture model but does not report any pharmacogenomic interactions (gene variants) affecting PK or PD parameters. |
| popPK | Gerich_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cellular signaling (H2O2 effects on Ca2+) in rat hippocampal neurons, using dantrolene only as a pharmacological antagonist for ryanodine receptors, with no PK parameters reported. |
| PGx | Huang_2015 | not_relevant | 3 | 8 | While the paper reports differences in brain distribution of dantrolene between Bcrp knockout and wild-type rats, it is an animal study (rats) evaluating transporter function, not a clinical pharmacogenomic study linking human gene variants to PK/PD parameters. |
| PGx | Khodabukus_2024 | not_relevant | 0 | 0 | The paper investigates the functional effects of dantrolene on LGMD2B muscle phenotypes but does not report pharmacogenomic associations (gene variant/genotype differences) affecting dantrolene's PK or PD parameters. |
| PGx | Klingler_2016 | not_relevant | 3 | 0 | The paper discusses the clinical and legal aspects of malignant hyperthermia and dantrolene use but does not report quantitative data on how specific gene variants alter the pharmacokinetic or pharmacodynamic parameters of dantrolene. |
| PGx | Klingler_2020 | not_relevant | 2 | 2 | The paper discusses malignant hyperthermia, a pharmacogenetic condition associated with ryanodine receptor variants, but focuses on volatile anesthetics and legal/clinical aspects rather than quantitative PK/PD effects of dantrolene. |
| PGx | Klont_1994 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of dantrolene on muscle metabolism across different halothane genotypes but explicitly states that the treatment influenced all genotypes to the same extent, indicating no pharmacogenomic interaction or differential PK/PD effect by genotype. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | Dantrolene is mentioned only as a tool compound that did not affect the contraction, with no pharmacokinetic parameters reported. |
| PGx | Kodaira_2010 | not_relevant | 1 | 5 | Dantrolene is used only as a reference probe compound to validate transporters, not as the primary drug whose PK is modulated by a genotype. |
| popPK | Kodaira_2014 | irrelevant | 2 | 0 | The paper focuses on brain-to-CSF distribution ratios (Kp,uu) for 19 compounds including dantrolene, and does not report systemic PK parameters (CL, V, t1/2) or population PK model parameters for dantrolene. |
| popPK | Korolkiewicz_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of galanin analogs in rat gastric fundus, using dantrolene only as a comparative antagonist to study intracellular calcium release mechanisms, rather than measuring its population pharmacokinetic parameters. |
| popPK | Korolkiewicz_2000 | irrelevant | 0 | 0 | The paper investigates the mechanism of galanin-induced contractions in rat tissue using dantrolene as a pharmacological tool/inhibitor, not as a subject of pharmacokinetic analysis. |
| popPK | Kristensen_2018 | irrelevant | 0 | 0 | The study is a mechanistic physiology experiment on isolated muscle contractions using dantrolene to manipulate calcium levels, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Kuemmerle_1994 | irrelevant | 0 | 0 | This is a mechanistic study of calcium channels in intestinal muscle where dantrolene is used only as a pharmacological inhibitor, not a PK subject. |
| popPK | Kuemmerle_1995 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study of calcium signaling where dantrolene is used as a diagnostic blocker, not a pharmacokinetic study of dantrolene itself. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of insect ryanodine receptors and does not report pharmacokinetic disposition parameters for dantrolene. |
| popPK | López-Colomé_1993 | irrelevant | 0 | 0 | The paper investigates the mechanism of phosphoinositide hydrolysis in chick Müller glia and mentions dantrolene only as a minor inhibitor of calcium influx, providing no pharmacokinetic parameters for dantrolene. |
| popPK | López-Colomé_1997 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on excitatory amino acid receptors in Bergmann glia where dantrolene is used only as a mechanistic probe/antagonist, with no pharmacokinetic parameters reported. |
| popPK | Migita_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium homeostasis in muscle cells, not a pharmacokinetic study reporting disposition parameters for dantrolene. |
| popPK | Noda_2022 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro (muscle cell experiments) investigating dantrolene's effect on calcium release and EC50, not pharmacokinetic disposition parameters. |
| popPK | Ohnishi_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dantrolene's effect on sarcoplasmic reticulum calcium permeability in pigs and does not report any pharmacokinetic parameters. |
| PGx | Oliveira_2020 | not_relevant | 0 | 0 | The paper describes a case of Malignant Hyperthermia and its clinical course; dantrolene was not administered, and no pharmacokinetic or pharmacodynamic parameters of dantrolene were measured or reported. |
| popPK | Oo_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the interaction between dantrolene, calmodulin, and ryanodine receptors, reporting no pharmacokinetic parameters. |
| PGx | Ording_1989 | not_relevant | 0 | 0 | The paper is a general review of the pathophysiology of malignant hyperthermia and does not contain pharmacogenomic or quantitative pharmacokinetic/pharmacodynamic data. |
| PGx | Reifenstahl_2009 | not_relevant | 0 | 0 | The text is a general review of Malignant Hyperthermia and mentions dantrolene only as a treatment without reporting any gene-specific effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Robertson_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological/mechanistic investigation of levamisole and ryanodine receptors in Ascaris suum, with dantrolene serving only as a comparative agent, and no pharmacokinetic parameters for dantrolene are reported. |
| popPK | Román_2021 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of dantrolene on vascular contraction in aortic rings (in vitro/ex vivo) and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Rossier_1987 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of calcium regulation in bovine adrenal cells where dantrolene is used as a pharmacological tool, not as a subject for pharmacokinetic analysis. |
| popPK | Seol_2005 | irrelevant | 0 | 0 | Dantrolene is used only as a mechanistic inhibitor of Ca2+-induced Ca2+ release in an in vitro cellular study, with no pharmacokinetic data reported. |
| PGx | Takada_2010 | not_relevant | 0 | 0 | The paper describes the radiosynthesis of a PET tracer for dantrolene and contains no pharmacogenomic data, genetic variants, or analysis of genotype-dependent PK/PD parameters. |
| PGx | Thachuk_2026 | not_relevant | 1 | 0 | The paper is a narrative review on the pathophysiology of malignant hyperthermia and diagnostic multi-omics, containing no specific data on pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of dantrolene. |
| popPK | Tian_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a dantrolene analog (azumolene) on sarcoplasmic reticulum, containing no pharmacokinetic parameters for dantrolene. |
| popPK | Veldhuis_1987 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on calcium exchange in swine granulosa cells where dantrolene is used only as a pharmacological inhibitor, not as a subject for pharmacokinetic characterization. |
| PGx | Yang_2019 | not_relevant | 0 | 0 | The paper is a general review of malignant hyperthermia that mentions dantrolene as a treatment but does not report specific pharmacogenomic effects on dantrolene's PK or PD parameters. |
| popPK | Zhang_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of azumolene (a dantrolene analog) on calcium channels in frog muscle fibers and does not report pharmacokinetic parameters for dantrolene. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:01 UTC</sub>
