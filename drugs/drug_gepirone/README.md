<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;gepirone&quot;}]"></div>

# gepirone

- **generic name:** gepirone
- **ATC codes:** `N06AX19`
- **DrugBank:** [DB12184](https://go.drugbank.com/drugs/DB12184)
- **groups:** approved

## About

**Description.** Gepirone, an azapirone, is a pharmacologic analog of [buspirone] that acts selectively on the pre- and post-synaptic 5HT<sub>1A</sub> receptors. Although earlier clinical trials showed promising results for gepirone, its formulation as an immediate-release tablet necessitates frequent administration due to the short half-lives. It was not until an extended-release formulation of gepirone was made available that gepirone became a potential candidate for a new antidepressant.[A261670,A261675,A182315]

Gepirone was approved by the FDA on September 28, 2023, under the brand name EXXUA for the treatment of adults with major depressive disorder. It represents a novel class of antidepressants that selectively targets the 5HT<sub>1A</sub> receptors, thus possessing a more favorable side effects profile with comparable incidence of sexual dysfunction side effects as that of the placebo.[L48315]

**Indication.** Gepirone is indicated for the treatment of major depressive disorder (MDD) in adults.[L48295]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 22:27 | 9:21 | 0/0/0 | 0/0/0 | 0/0/0 | 46,861/3,086 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gepirone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…e administered radioactivity was recovered in the urine and feces, respectively as metabol…”</sub> | prose |
| excretion | kidney | <sub>“…13% of the administered radioactivity was recovered in the urine and feces, respectively a…”</sub> | prose |
| excretion | liver | <sub>“…ted in the urine within the first 24 hours. The presence of hepatic or renal impairment di…”</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (partial agonist), HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tay_1993.pdf` | Tay LK et al., Effect of food on the bioavailability o…, Journal of clinical pharmac… (1993) | popPK | 8 | [10.1002/j.1552-4604.1993.tb04715.x](https://doi.org/10.1002/j.1552-4604.1993.tb04715.x) | [8103528](https://pubmed.ncbi.nlm.nih.gov/8103528) | The study reports quantitative pharmacokinetic parameters (Cmax, t1/2, AUC, MRT) for gepirone in humans, with values clearly present in the abstract text. |
| `Johnson_1996.pdf` | Johnson EA et al., The anxiolytic serotonin 5-HT1A recepto…, Behavioural brain research (1996) | pd | 5 | [10.1016/0166-4328(96)00123-4](https://doi.org/10.1016/0166-4328(96)00123-4) | [8788529](https://www.ncbi.nlm.nih.gov/pubmed/8788529) | metadata signals extractable PD data (EC50) |
| `Yang_2025.pdf` | Yang Z et al., Ketoconazole Inhibition of Gepirone Bio…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70059](https://doi.org/10.1002/jcph.70059) | [40536342](https://www.ncbi.nlm.nih.gov/pubmed/40536342) | metadata signals extractable PD data (IC50) |
| `Claustre_1991.pdf` | Claustre Y et al., Potential mechanisms involved in the ne…, Journal of neurochemistry (1991) | pd | 4 | [10.1111/j.1471-4159.1991.tb11422.x](https://doi.org/10.1111/j.1471-4159.1991.tb11422.x) | [1848278](https://www.ncbi.nlm.nih.gov/pubmed/1848278) | metadata signals extractable PD data (IC50) |
| `Okada_1989.pdf` | Okada F et al., Pertussis toxin attenuates 5-hydroxytry…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb09209.x](https://doi.org/10.1111/j.1471-4159.1989.tb09209.x) | [2523468](https://www.ncbi.nlm.nih.gov/pubmed/2523468) | metadata signals extractable PD data (EC50) |
| `Scott_1994.pdf` | Scott PA et al., Differential induction of 5-HT1A-mediat…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8035316](https://www.ncbi.nlm.nih.gov/pubmed/8035316) | metadata signals extractable PD data (EC50) |
| `Yocca_1992.pdf` | Yocca FD et al., Lack of apparent receptor reserve at po…, Molecular pharmacology (1992) | pd | 4 | not captured | [1352034](https://www.ncbi.nlm.nih.gov/pubmed/1352034) | metadata signals extractable PD data (EC50) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Greenblatt_2003.pdf` | Greenblatt DJ et al., Human cytochromes mediating gepirone bi…, Biopharmaceutics & drug dis… (2003) | pgx | 7 | [10.1002/bdd.340](https://doi.org/10.1002/bdd.340) | [12619053](https://www.ncbi.nlm.nih.gov/pubmed/12619053) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Caccia_2004.pdf` | Caccia S, Metabolism of the newest antidepressant…, IDrugs : the investigationa… (2004) | pgx | 5 | not captured | [15057659](https://www.ncbi.nlm.nih.gov/pubmed/15057659) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-23T22:26:16.061809+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohmaker_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of 5-HT1A autoreceptor desensitization in rats and does not report any pharmacokinetic parameters for gepirone. |
| PGx | Caccia_2004 | not_relevant | 2 | 0 | The paper only lists the CYP enzymes involved in gepirone metabolism without reporting specific pharmacogenomic effects or PK/PD parameter changes. |
| popPK | Callahan_1997 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats examining discriminative stimulus properties, not a pharmacokinetic study, and contains no PK parameters for gepirone. |
| PD | Callahan_1997 | not_relevant | 2 | 1 | The paper reports qualitative behavioral observations (lack of effect) for gepirone in a drug discrimination paradigm, but provides no numeric concentration-effect or dose-response parameters (e.g., ED50, Emax) for gepirone itself. |
| popPK | Claustre_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in rat hippocampal slices and does not report pharmacokinetic parameters for gepirone. |
| popPK | DeBattista_2024 | irrelevant | 0 | 0 | The paper is a general review of new psychotropic drugs that mentions gepirone's approval and mechanism but contains no quantitative pharmacokinetic parameters or disposition data. |
| PD | DeBattista_2024 | not_relevant | 0 | 0 | The text is a general review of new psychotropic drugs and mentions gepirone's mechanism and approval history, but it does not report any pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for gepirone. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The text discusses the approval and mechanism of gepirone but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Eison_1986 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study focusing on serotonergic mechanisms and does not report any pharmacokinetic parameters for gepirone. |
| PD | Eison_1986 | not_relevant | 3 | 0 | The text describes a qualitative shift in the dose-response curve but does not provide numeric PD parameters or extractable data. |
| popPK | Gałka_2025 | irrelevant | 1 | 0 | The paper is a narrative review focusing on mechanism of action and clinical evidence, and the provided evidence contains no quantitative pharmacokinetic parameter values for gepirone. |
| popPK | Greenblatt_2003 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PGx | Greenblatt_2003 | not_relevant | 0 | 0 | The paper investigates the role of human cytochromes in gepirone biotransformation but does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Haddjeri_1999 | irrelevant | 0 | 0 | The study focuses on the neuropharmacological effects of flesinoxan in rats, with gepirone mentioned only as a comparator for receptor activation, and no pharmacokinetic parameters are reported. |
| PD | Haddjeri_1999 | not_relevant | 1 | 0 | The paper focuses on flesinoxan and only qualitatively mentions gepirone as a comparison for tonic activation, without providing any numeric PD parameters or exposure-response data for gepirone. |
| popPK | Johnson_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor activity and tyrosine hydroxylation inhibition, reporting no pharmacokinetic parameters for gepirone. |
| popPK | Konstantakopoulos_2025 | irrelevant | 0 | 0 | The paper is a narrative review of the drug's discovery and development history, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Konstantakopoulos_2025 | not_relevant | 2 | 1 | The text is a high-level review of gepirone's discovery and development, mentioning its pharmacodynamic profile qualitatively but providing no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Matheson_1994 | irrelevant | 0 | 0 | The study reports pharmacodynamic ED50 values and neuronal activity inhibition, not quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for gepirone. |
| popPK | McMillen_1987 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study focusing on behavioral and neurochemical effects (aggression, monoamine metabolism, receptor binding) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Millan_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of opioid antinociception and does not report any pharmacokinetic parameters for gepirone. |
| popPK | Nader_1993 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in pigeons examining dose-response interactions, not a pharmacokinetic study, and reports no disposition parameters for gepirone. |
| popPK | Nader_1994 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rhesus monkeys focusing on drug discrimination, not a pharmacokinetic study, and reports no disposition parameters for gepirone. |
| popPK | Okada_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in rat hippocampal membranes and does not report pharmacokinetic parameters for gepirone. |
| popPK | Sanger_1989 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study investigating the effects of 5HT(1A) agonists on passive avoidance responses in rats, and it does not report any pharmacokinetic parameters for gepirone. |
| PD | Sanger_1989 | not_relevant | 2 | 1 | The paper describes qualitative dose-response observations (e.g., bell-shaped curve for 8-OH-DPAT) but does not provide numeric PD parameters or extractable concentration-effect data for gepirone. |
| popPK | Scott_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of 5-HT1A receptor agonism (hypothermia and syndrome) in rats and does not report any pharmacokinetic parameters for gepirone. |
| popPK | Söderpalm_1989 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study investigating anxiolytic effects in rats and does not report any pharmacokinetic parameters for gepirone. |
| popPK | Söderpalm_1990 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study investigating anxiolytic effects in an animal model and does not report any pharmacokinetic parameters for gepirone. |
| PD | Söderpalm_1990 | not_relevant | 2 | 0 | The paper describes qualitative dose-response trends (biphasic effects) in an animal model but does not provide numeric PD parameters, concentration-effect curves, or quantitative PK/PD modeling data. |
| PGx | Tandon_2004 | not_relevant | 0 | 0 | The paper describes the design and synthesis of new arylpiperazine ligands and their in vitro CYP3A4 stability, but does not report pharmacogenomic effects on the PK/PD of gepirone. |
| popPK | Timmer_2003 | irrelevant | 4 | 0 | The study reports only summary exposure metrics (Cmax, Tmax, AUC) for formulation comparison and does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yang_2025 | irrelevant | 2 | 0 | The study focuses on drug-drug interaction ratios (fold-changes) and in-vitro IC50 values rather than reporting absolute quantitative disposition parameters (CL, V, ka) for gepirone. |
| PD | Yang_2025 | not_relevant | 3 | 2 | The paper reports in vitro enzyme inhibition (IC50) and in vivo pharmacokinetic interaction (exposure changes), but does not report a pharmacodynamic (concentration-effect) relationship for gepirone itself. |
| popPK | Yocca_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor reserve in rat hippocampal membranes and does not report any pharmacokinetic parameters for gepirone. |
| PD | Yocca_1992 | not_relevant | 0 | 0 | The study is an in vitro receptor binding and functional assay analysis using irreversible antagonism to determine receptor reserve; it does not report in vivo pharmacokinetic or pharmacodynamic exposure-response relationships for gepirone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
