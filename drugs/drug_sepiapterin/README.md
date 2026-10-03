<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sepiapterin&quot;}]"></div>

# sepiapterin

- **generic name:** sepiapterin
- **ATC codes:** `A16AX28`
- **DrugBank:** [DB16326](https://go.drugbank.com/drugs/DB16326) · **PubChem:** not captured
- **molar mass:** 237.219 g/mol (C9H11N5O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Sepiapterin is a small molecule activator of phenylalanine hydroxylase (PAH) used to reduce phenyalanine levels in patients with phenylketonuria. It is a natural precursor of the enzymatic co-factor tetrahydrobiopterin (BH4), which activates PAH and helps reduce blood phenylalanine levels by enhancing the conformational stability of misfolded PAH enzymes and increasing intracellular concentrations of BH4.[L53548,L53593]

Sepiapterin was granted marketing authorization by the European Commission in June 2025 and by the US FDA in July 2025 for the treatment of adults and children with phenylketonuria.[L53713,L53718]

**Indication.** Sepiapterin is indicated in conjunction with a phenylalanine-restricted diet for the treatment of hyperphenylalaninemia (HPA) in adult and pediatric patients 1 month of age and older with sepiapterin-responsive phenylketonuria (PKU).[L53548,L53593]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:58 | 5:36 | 0/0/0 | 0/0/0 | 0/0/2 | 15,409/1,933 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCG2 (BCRP)** | `Q74` · AUClast | transport | [Gao_2024_2](drugs/drug_sepiapterin/pgx_Gao_2024_2_ABCG2_BCRP_Q74.md) | Gao L et al., Clinical Assessment of Breast Cancer Re…, Drugs in R&D (2024) | [10.1007/s40268-024-00488-0](https://doi.org/10.1007/s40268-024-00488-0) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **PAH** | `Q321` · EC50 | target | [Lah_2026](drugs/drug_sepiapterin/pgx_Lah_2026_PAH_Q321.md) | Lah M et al., Sepiapterin: A Distinct, Dual Mechanism…, Advances in therapy (2026) | [10.1007/s12325-026-03607-2](https://doi.org/10.1007/s12325-026-03607-2) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sepiapterin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…metabolites primarily excreted in feces…”</sub> | prose |
| excretion | kidney | <sub>“…6.71% of the dosed radioactivity recovered in urine…”</sub> | prose |

<sub>Actors without a tissue in the table: ABCG2 (BCRP) (transport), DHFR (substrate), PAH (binder), PAH (target), SPR (substrate), Tetrahydrobiopterin (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 47 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_2024_3.pdf` | Gao L et al., Relative Oral Bioavailability and Food…, Clinical pharmacology in dr… (2024) | popPK | 5 | [10.1002/cpdd.1363](https://doi.org/10.1002/cpdd.1363) | [38156759](https://pubmed.ncbi.nlm.nih.gov/38156759) | Sepiapterin is the subject drug in a PK study, but the evidence contains only relative exposure ratios (bioavailability/food effect) with no numeric disposition parameters (CL, V, t½) or model values, which are not present in the provided text. |
| `Meyer_2019.pdf` | Meyer JT et al., Pharmacological Assessment of Sepiapter…, The Journal of pharmacology… (2019) | pd | 5 | [10.1124/jpet.119.257105](https://doi.org/10.1124/jpet.119.257105) | [31110114](https://www.ncbi.nlm.nih.gov/pubmed/31110114) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Blasko_2002.pdf` | Blasko E et al., Mechanistic studies with potent and sel…, The Journal of biological c… (2002) | pd | 4 | [10.1074/jbc.M105691200](https://doi.org/10.1074/jbc.M105691200) | [11689556](https://www.ncbi.nlm.nih.gov/pubmed/11689556) | metadata signals extractable PD data (IC50) |
| `Gunnett_2005.pdf` | Gunnett CA et al., Mechanisms of inducible nitric oxide sy…, Arteriosclerosis, thrombosi… (2005) | pd | 4 | [10.1161/01.ATV.0000172626.00296.ba](https://doi.org/10.1161/01.ATV.0000172626.00296.ba) | [15933248](https://www.ncbi.nlm.nih.gov/pubmed/15933248) | metadata signals extractable PD data (EC50) |
| `Gao_2024.pdf` | Gao L et al., A Phase 1 Study to Assess the Pharmacok…, Pharmaceuticals (Basel, Swi… (2024) | pgx | 7 | [10.3390/ph17111411](https://doi.org/10.3390/ph17111411) | [39598323](https://www.ncbi.nlm.nih.gov/pubmed/39598323) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |

<sub>queue written 2026-09-30T02:57:52.072374+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Andrade_2019 | not_relevant | 0 | 0 | Study of lizard color polymorphism genetics; no drug PK/PD pharmacogenomic effects reported. |
| popPK | Blasko_2002 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Blasko_2002 | not_relevant | 0 | 0 | Paper describes iNOS dimerization inhibitor mechanistic studies; no sepiapterin exposure- or dose-response PD relationship or numeric PD parameters reported. |
| PGx | Eslamiyeh_2025 | not_relevant | 1 | 1 | Paper describes an SPR gene variant causing sepiapterin reductase deficiency; no drug (sepiapterin) PK/PD parameter is reported. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PGx | Gao_2024 | not_relevant | 0 | 0 | Phase 1 PK/safety study in healthy participants; no gene variant/genotype effects on sepiapterin PK/PD reported. |
| popPK | Gao_2024_3 | irrelevant | 5 | 1 | Sepiapterin is the subject drug in a PK study, but the evidence contains only relative exposure ratios (bioavailability/food effect) with no numeric disposition parameters (CL, V, t½) or model values, which are not present in the provided text. |
| popPK | Gao_2026 | irrelevant | 3 | 2 | This is an ethnic sensitivity/exposure-prediction analysis reporting only relative fold-changes in BH4 exposure, not sepiapterin disposition parameters (CL, V, ka) or a population-PK model with numeric values. |
| PGx | Gao_2026_2 | not_relevant | 0 | 0 | Paper reports sepiapterin PK and concentration-QTc effects but no gene variant/genotype effect on any PK or PD parameter. |
| popPK | Gibraeil_2000 | irrelevant | 0 | 0 | In-vitro pharmacology study of 4-ABH(4); sepiapterin is only a co-incubation comparator with no PK parameters. |
| popPK | Gunnett_2005 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Gunnett_2005 | not_relevant | 0 | 0 | Only a title is provided; no sepiapterin PD or exposure-response data or parameters are reported. |
| PGx | Himmelreich_2021 | not_relevant | 2 | 1 | Review of BH4 deficiency gene variants and clinical phenotypes; no pharmacokinetic or pharmacodynamic effect of variants on sepiapterin is reported. |
| popPK | Ikemoto_2008 | irrelevant | 0 | 0 | In-vitro cell biology study of DAHP effects on HUVEC; sepiapterin is only a supplementation reagent with no PK parameters reported. |
| PD | Ikemoto_2008 | not_relevant | 2 | 1 | In-vitro dose-response of DAHP (not sepiapterin) on VCAM-1/BH4 is described qualitatively with no numeric PD parameters or extractable effect-concentration curves; sepiapterin is only a rescue supplement. |
| PGx | Ishikawa_2016 | not_relevant | 3 | 2 | Sepiapterin is used as a corrective treatment in iPSC-derived neurons; no gene variant effect on sepiapterin PK/PD parameters is reported. |
| PGx | Jacobson_1981 | not_relevant | 1 | 3 | Sepiapterin is studied as an endogenous pteridine in Drosophila tRNA queuine metabolism, not as a drug with gene-variant effects on its PK/PD parameters. |
| PGx | Jones_2026 | not_relevant | 1 | 1 | Narrative review mentions sepiapterin only as a therapy option; no gene variant effect on its PK/PD parameters reported. |
| PGx | Jung-Klawitter_2019 | not_relevant | 0 | 0 | Review on diagnostic analytics of neurotransmitter/pterin biomarkers; no pharmacogenomic effect on sepiapterin PK/PD reported. |
| PGx | Klaassen_2025 | not_relevant | 4 | 3 | Predicts BH4/sepiapterin responsiveness by PAH genotype categorically, but no measured PK/PD parameter change (e.g., Phe reduction magnitude) per genotype is reported. |
| popPK | La_2013 | irrelevant | 1 | 0 | Sepiapterin is used only as an intracavernosal pharmacological probe; no PK disposition parameters are reported. |
| PD | La_2013 | not_relevant | 3 | 2 | Sepiapterin effect is only a qualitative presence/absence comparison (ICP/MAP augmentation, P&lt;0.05) with no dose-response, concentration-effect data, or numeric PD parameters (no Emax/EC50 for sepiapterin) reported. |
| PGx | Latremoliere_2018 | not_relevant | 2 | 3 | Sepiapterin is discussed only as a biomarker of SPR inhibition; no gene variant effect on sepiapterin PK/PD parameters is reported. |
| PGx | McHugh_2008 | not_relevant | 0 | 0 | Proteomic changes in sepiapterin reductase from paroxetine exposure; no gene variant effect on PK/PD parameters of sepiapterin. |
| popPK | Meyer_2019 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PGx | Nezhad_2024 | not_relevant | 0 | 0 | Paper reports BH4 biosynthesis gene mutations in HPA patients; sepiapterin is not studied and no PK/PD parameters are reported. |
| popPK | Ohashi_2011 | irrelevant | 1 | 0 | In-vitro/mechanistic transporter study with no quantitative PK disposition parameters for sepiapterin reported in the evidence. |
| PGx | Pearl_2007 | not_relevant | 0 | 0 | Review of pediatric neurotransmitter disorders; no pharmacogenomic effect on sepiapterin PK/PD reported. |
| PD | Qi_2015 | not_relevant | 0 | 0 | This is a population PK-only analysis (CL/F, V/F, absorption) of sapropterin; no concentration-effect or dose-response PD relationship (e.g., Phe reduction vs exposure) is modeled or quantified. |
| popPK | Shaban_2024 | irrelevant | 0 | 0 | Sepiapterin appears only as "sepiapterin reductase" in an in-silico enzyme target; no PK parameters for sepiapterin are reported. |
| PD | Shaban_2024 | not_relevant | 0 | 0 | Sepiapterin appears only as "sepiapterin reductase" in in silico docking; no sepiapterin exposure- or dose-response PD data or parameters are reported. |
| popPK | Sigel_1987 | irrelevant | 0 | 0 | The paper reports PK parameters for piritrexim, not sepiapterin, which is only mentioned as a biochemical probe substrate. |
| popPK | Smith_2019 | irrelevant | 4 | 2 | A Phase I PK study of sepiapterin, but only Cmax/Tmax are reported; no CL, V, half-life, or compartmental/population-PK parameters, and no numeric disposition values are present. |
| popPK | Tiefenbacher_2000 | irrelevant | 0 | 0 | Sepiapterin is used only as an in-vitro incubation substrate in a vascular reactivity study, with no pharmacokinetic parameters reported. |
| PD | Tiefenbacher_2000 | not_relevant | 2 | 1 | Sepiapterin was used as a fixed incubation condition in ex vivo vessel studies; dose-response curves are to agonists (histamine, serotonin, etc.), not to sepiapterin, and no sepiapterin concentration-effect parameters (Emax, EC50) are reported or derivable. |
| popPK | Tiefenbacher_2003 | irrelevant | 0 | 0 | This is a pharmacodynamic study of sepiapterin in ischemia/reperfusion with no PK parameters or numeric disposition values reported. |
| PGx | Verbeek_2008 | not_relevant | 2 | 3 | Reports SPR mutation effects on endogenous CSF/urine metabolites, not on PK/PD parameters of administered sepiapterin. |
| popPK | Williams_2025 | irrelevant | 3 | 0 | This is a narrative review discussing sepiapterin PK qualitatively with no numeric disposition parameters present in the evidence. |
| PD | Williams_2025 | not_relevant | 2 | 1 | Narrative review discussing sepiapterin's PD qualitatively; no numeric PD parameters or effect-concentration data extractable from the abstract. |
| PGx | de_2018 | not_relevant | 0 | 0 | No sepiapterin administration or PK/PD parameters; only endogenous BH4 pathway enzyme expression in mice. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
