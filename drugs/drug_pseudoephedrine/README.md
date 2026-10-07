<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;pseudoephedrine&quot;}]"></div>

# pseudoephedrine

- **generic name:** pseudoephedrine
- **ATC codes:** `R01BA02`
- **DrugBank:** [DB00852](https://go.drugbank.com/drugs/DB00852) · **PubChem:** [CID 7028](https://pubchem.ncbi.nlm.nih.gov/compound/7028)
- **molar mass:** 165.2322 g/mol (C10H15NO) — DrugBank
- **groups:** approved, investigational

## About

Pseudoephedrine is a decongestant used to relieve nasal congestion from conditions such as the common cold, sinusitis, and nasopharyngitis, and it also acts as a bronchodilator. It is an approved medicine, available in nasal and respiratory preparations, and is widely used as a systemic nasal decongestant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q263958](https://www.wikidata.org/wiki/Q263958) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:25 | 0:38 | 0/0/0 | 1/1/0 | 0/0/0 | 32,394/2,564 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Palamanda_2010_nasal_congestion_feline_model_of_nasal_congestion](drugs/drug_pseudoephedrine/pd_Palamanda_2010_nasal_congestion_feline_model_of_nasal_conges.md) | nasal congestion (feline model of nasal congestion) ← pseudoephedrine · direct sigmoid Emax (Hill) effect | — | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta1_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta1_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta1-AR ← pseudoephedrine (1S,2S and 1R,2R isomers) · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta2_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta2_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta2-AR ← pseudoephedrine (1S,2S and 1R,2R isomers) · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_cAMP_beta3_AR](drugs/drug_pseudoephedrine/pd_Vansal_1999_cAMP_beta3_AR.md) | cyclic AMP accumulation (adenylyl cyclase stimulation) via human beta3-AR ← pseudoephedrine · direct Emax (saturable) effect | — | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pseudoephedrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRB1 (partial agonist), ADRB1 (target), ADRB2 (partial agonist), ATF1 (inhibitor), DRD2 (stimulator), IL2 (inhibitor), NFATC1 (inhibitor), NFKB1 (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Palamanda_2010.pdf` | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | popPK | 10 | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) | [20446910](https://pubmed.ncbi.nlm.nih.gov/20446910) | Original PK study reporting CL, Vdss, t1/2, and bioavailability values for pseudoephedrine directly in the abstract. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 8 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | Human crossover PK study with a one-compartment absorption model for pseudoephedrine, but the abstract reports only qualitative directions (higher ka, Cmax) with no numeric parameter values shown. |
| `Graves_1990.pdf` | Graves DA et al., Application of NONMEM to routine bioava…, Journal of pharmacokinetics… (1990) | popPK | 8 | [10.1007/BF01063557](https://doi.org/10.1007/BF01063557) | [2348381](https://pubmed.ncbi.nlm.nih.gov/2348381) | Population-PK (NONMEM) analysis of pseudoephedrine absorption/disposition, but no numeric parameter values appear in the evidence. |
| `He_2005.pdf` | He F et al., [Effect on pharmacokinetics of pseudo-e…, Zhongguo Zhong yao za zhi =… (2005) | popPK | 8 | not captured | [16381471](https://pubmed.ncbi.nlm.nih.gov/16381471) | Human PK study of pseudoephedrine with compartmental modeling, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| `Pade_1995.pdf` | Pade V et al., Bioavailability of pseudoephedrine from…, Biopharmaceutics & drug dis… (1995) | popPK | 6 | [10.1002/bdd.2510160503](https://doi.org/10.1002/bdd.2510160503) | [8527687](https://pubmed.ncbi.nlm.nih.gov/8527687) | Human bioavailability/PK study with a one-compartment model, but the evidence gives no numeric CL/V/ka values — parameters likely in tables/figures not provided. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 5 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | PK of pseudoephedrine measured in febrile rats, but only AUC/MRT statistical moment totals are described; no numeric CL/V/ka values appear in the evidence. |

<sub>queue written 2026-10-07T13:25:27.507034+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atsumi_2026 | relevant | 8 | 3 | Human crossover PK study with a one-compartment absorption model for pseudoephedrine, but the abstract reports only qualitative directions (higher ka, Cmax) with no numeric parameter values shown. |
| popPK | Bantle_1990 | irrelevant | 0 | 0 | This is a developmental toxicity assay in Xenopus embryos with no pharmacokinetic parameters for pseudoephedrine. |
| popPK | Graves_1990 | relevant | 8 | 2 | Population-PK (NONMEM) analysis of pseudoephedrine absorption/disposition, but no numeric parameter values appear in the evidence. |
| popPK | He_2005 | relevant | 8 | 2 | Human PK study of pseudoephedrine with compartmental modeling, but no numeric parameter values appear in the evidence (likely in tables/figures not provided). |
| popPK | Jing_2010 | irrelevant | 0 | 0 | This is an electrophysiology/mechanism study of ephedrine; pseudoephedrine is only a negative comparator with no PK parameters. |
| popPK | Pade_1995 | relevant | 6 | 4 | Human bioavailability/PK study with a one-compartment model, but the evidence gives no numeric CL/V/ka values — parameters likely in tables/figures not provided. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | In vitro receptor/transporter pharmacology study with no pharmacokinetic parameters for pseudoephedrine. |
| popPK | Van_2004 | irrelevant | 0 | 0 | This is a population-PK study of garenoxacin; pseudoephedrine appears only as a concomitant-medication covariate affecting garenoxacin clearance, not as the subject drug. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | In vitro receptor pharmacology study of ephedrine isomers with EC50 values, no PK disposition parameters for pseudoephedrine. |
| popPK | Wan_2019 | relevant | 5 | 2 | PK of pseudoephedrine measured in febrile rats, but only AUC/MRT statistical moment totals are described; no numeric CL/V/ka values appear in the evidence. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | Pseudoephedrine is only used as an internal standard; the PK parameters are for matrine alkaloids, not pseudoephedrine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
