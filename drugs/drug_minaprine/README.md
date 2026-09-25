<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;minaprine&quot;}]"></div>

# minaprine

- **generic name:** minaprine
- **ATC codes:** `N06AX07`
- **DrugBank:** [DB00805](https://go.drugbank.com/drugs/DB00805)
- **groups:** approved

## About

**Description.** Minaprine is a psychotropic drug which has proved to be effective in the treatment of various depressive states. Like most antidepressants minaprine antagonizes behavioral despair. Minaprine  is an amino-phenylpyridazine antidepressant reported to be relatively free of cardiotoxicity, drowsiness, and weight gain.

**Indication.** For the treatment of depression

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:49 | 7:26 | 0/0/0 | 0/0/0 | 0/0/0 | 21,410/2,105 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=minaprine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| target | blood | `ACHE` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), DRD1 (target), DRD2 (target), HTR2A (target), HTR2B (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Davi_1992.pdf` | Davi H et al., Disposition of minaprine in animals and…, Xenobiotica; the fate of fo… (1992) | popPK | 8 | [10.3109/00498259209046615](https://doi.org/10.3109/00498259209046615) | [1632106](https://pubmed.ncbi.nlm.nih.gov/1632106) | The paper reports quantitative PK parameters (Cmax, AUC, t1/2) for minaprine in humans and animals, but lacks explicit clearance (CL) or volume (V) values and compartmental model parameters. |
| `Du_2006.pdf` | Du HZ et al., 3-Benzidino-6(4-chlorophenyl) pyridazin…, Neuroscience letters (2006) | pd | 4 | [10.1016/j.neulet.2006.03.067](https://doi.org/10.1016/j.neulet.2006.03.067) | [16647816](https://www.ncbi.nlm.nih.gov/pubmed/16647816) | metadata signals extractable PD data (IC50) |
| `Garattini_1984.pdf` | Garattini S et al., Neurochemical effects of minaprine, a n…, Psychopharmacology (1984) | pd | 4 | [10.1007/BF00427775](https://doi.org/10.1007/BF00427775) | [6425901](https://www.ncbi.nlm.nih.gov/pubmed/6425901) | metadata signals extractable PD data (IC50) |
| `Haji-Momenian_2003.pdf` | Haji-Momenian S et al., Comparative molecular field analysis an…, Bioorganic & medicinal chem… (2003) | pgx | 7 | [10.1016/s0968-0896(03)00525-x](https://doi.org/10.1016/s0968-0896(03)00525-x) | [14642599](https://www.ncbi.nlm.nih.gov/pubmed/14642599) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-24T00:48:20.676439+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allain_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on memory outcomes and does not report any pharmacokinetic parameters for minaprine. |
| PD | Allain_1996 | not_relevant | 1 | 0 | The paper reports a clinical trial with a single fixed dose (200 mg/d) and provides only statistical p-values for clinical endpoints, lacking any exposure-response modeling, concentration-effect data, or numeric PD parameters like Emax or EC50. |
| popPK | Cailleux_1982 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Chico_2009 | not_relevant | 0 | 0 | The paper discusses CYP2D6 substrate status and molecular properties but does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Contreras_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on acetylcholinesterase inhibition (IC50 values) and does not report any pharmacokinetic parameters for minaprine. |
| PD | Contreras_1999 | not_relevant | 3 | 2 | The text reports a single in vitro IC50 value for minaprine as part of a structure-activity relationship study, but does not provide an exposure-response curve, dose-response analysis, or PK/PD model with derivable PD parameters like Emax or slope. |
| popPK | Davi_1985 | irrelevant | 2 | 0 | The study is a qualitative metabolite identification study in baboons that does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Davi_1992 | relevant | 8 | 4 | The paper reports quantitative PK parameters (Cmax, AUC, t1/2) for minaprine in humans and animals, but lacks explicit clearance (CL) or volume (V) values and compartmental model parameters. |
| PD | Davi_1992 | not_relevant | 2 | 1 | The paper reports PK parameters and a qualitative observation of seizures in dogs at a specific dose, but it does not provide a quantitative concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., EC50, Emax) for minaprine. |
| popPK | Du_2006 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Du_2006 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of a different compound (3-Benzidino-6(4-chlorophenyl) pyridazine) on rat neurons and does not mention minaprine or report any pharmacodynamic parameters for it. |
| popPK | Garattini_1984 | irrelevant | 0 | 0 | The study focuses on neurochemical effects (acetylcholine content, enzyme activity) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Haji-Momenian_2003 | not_relevant | 0 | 0 | The paper uses minaprine as a structural reference for CoMFA modeling of CYP2D6 substrates and does not report any pharmacogenomic effects on minaprine's PK or PD parameters. |
| popPK | Harel-Dupas_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions in synaptosomes and does not report any pharmacokinetic parameters for minaprine. |
| popPK | Jouglard_1996 | irrelevant | 0 | 0 | The paper is a toxicology/epidemiological study on the severity of minaprine intoxication and does not report any pharmacokinetic parameters. |
| PD | Jouglard_1996 | not_relevant | 1 | 0 | The paper reports a qualitative association between increased dosage and increased severity (seizures/death) based on poison control data, but provides no numeric PD parameters, concentration-effect curves, or dose-response modeling. |
| popPK | Kinirons_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of psychomotor performance and cardiovascular effects, reporting no pharmacokinetic parameters for minaprine. |
| PD | Kinirons_1993 | not_relevant | 2 | 1 | The study reports qualitative psychomotor effects of a single fixed dose compared to placebo and control, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Lorenzini_1993 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study investigating the nootropic effects of minaprine in rats and does not report any pharmacokinetic parameters. |
| PD | Lorenzini_1993 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response effect (5, 10, 25 mg/kg) on behavioral outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| popPK | Montgomery_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing antidepressant response rates and side effects, containing no pharmacokinetic parameters or disposition data for minaprine. |
| PD | Montgomery_1991 | not_relevant | 3 | 1 | The paper reports a clinical dose-response comparison (200mg vs 300mg) but lacks exposure data (plasma concentrations) and does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Muramatsu_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and neurotransmitter release, not a pharmacokinetic study reporting disposition parameters for minaprine. |
| PD | Muramatsu_1990 | not_relevant | 3 | 2 | The paper reports in vitro binding IC50s and qualitative attenuation of neurotransmitter release, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for effect) for minaprine itself. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The paper is a review of steroid hormone mechanisms and mentions minaprine only as a therapeutic agent without providing any pharmacokinetic parameters. |
| popPK | Schumacher_1989 | irrelevant | 0 | 0 | The paper focuses on the pharmacological characterization of SR 95639A, a minaprine analogue, and does not report pharmacokinetic parameters for minaprine. |
| PD | Schumacher_1989 | not_relevant | 0 | 0 | The paper characterizes a different compound (SR 95639A) and does not report pharmacodynamic or exposure-response data for minaprine. |
| popPK | Wermuth_1993 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review focusing on the synthesis and structure-activity relationships of minaprine analogues, reporting no quantitative pharmacokinetic parameters. |
| PD | Wermuth_1993 | not_relevant | 1 | 1 | The text provides an in vitro IC50 value for receptor binding but does not report an in vivo pharmacodynamic, exposure-response, or dose-response relationship with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
