<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;gepirone&quot;}]"></div>

# gepirone

- **generic name:** gepirone
- **ATC codes:** `N06AX19`
- **DrugBank:** [DB12184](https://go.drugbank.com/drugs/DB12184) · **PubChem:** [CID 55191](https://pubchem.ncbi.nlm.nih.gov/compound/55191)
- **molar mass:** 359.474 g/mol (C19H29N5O2) — DrugBank
- **groups:** approved

## About

Gepirone is an anxiolytic and antidepressant that acts as a serotonin receptor agonist. It is an approved drug, classified as an other antidepressant, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2650256](https://www.wikidata.org/wiki/Q2650256) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:11 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 33,546/1,244 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gepirone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (partial agonist), HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 48 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tay_1993.pdf` | Tay LK et al., Effect of food on the bioavailability o…, Journal of clinical pharmac… (1993) | popPK | 6 | [10.1002/j.1552-4604.1993.tb04715.x](https://doi.org/10.1002/j.1552-4604.1993.tb04715.x) | [8103528](https://pubmed.ncbi.nlm.nih.gov/8103528) | Human PK study of gepirone reporting Cmax, t1/2, AUC, MRT numerically, though no CL/V or compartmental model parameters. |
| `Timmer_2003.pdf` | Timmer CJ et al., Pharmacokinetic evaluation of gepirone…, Journal of pharmaceutical s… (2003) | popPK | 5 | [10.1002/jps.10421](https://doi.org/10.1002/jps.10421) | [12949996](https://pubmed.ncbi.nlm.nih.gov/12949996) | Human crossover PK study of gepirone formulations with numeric Cmax, Tmax, AUC values present, but no clearance/volume/half-life disposition parameters reported. |
| `Johnson_1996.pdf` | Johnson EA et al., The anxiolytic serotonin 5-HT1A recepto…, Behavioural brain research (1996) | pd | 5 | [10.1016/0166-4328(96)00123-4](https://doi.org/10.1016/0166-4328(96)00123-4) | [8788529](https://www.ncbi.nlm.nih.gov/pubmed/8788529) | metadata signals extractable PD data (EC50) |
| `Yang_2025.pdf` | Yang Z et al., Ketoconazole Inhibition of Gepirone Bio…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70059](https://doi.org/10.1002/jcph.70059) | [40536342](https://www.ncbi.nlm.nih.gov/pubmed/40536342) | metadata signals extractable PD data (IC50) |
| `Claustre_1991.pdf` | Claustre Y et al., Potential mechanisms involved in the ne…, Journal of neurochemistry (1991) | pd | 4 | [10.1111/j.1471-4159.1991.tb11422.x](https://doi.org/10.1111/j.1471-4159.1991.tb11422.x) | [1848278](https://www.ncbi.nlm.nih.gov/pubmed/1848278) | metadata signals extractable PD data (IC50) |
| `Okada_1989.pdf` | Okada F et al., Pertussis toxin attenuates 5-hydroxytry…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb09209.x](https://doi.org/10.1111/j.1471-4159.1989.tb09209.x) | [2523468](https://www.ncbi.nlm.nih.gov/pubmed/2523468) | metadata signals extractable PD data (EC50) |
| `Scott_1994.pdf` | Scott PA et al., Differential induction of 5-HT1A-mediat…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8035316](https://www.ncbi.nlm.nih.gov/pubmed/8035316) | metadata signals extractable PD data (EC50) |
| `Yocca_1992.pdf` | Yocca FD et al., Lack of apparent receptor reserve at po…, Molecular pharmacology (1992) | pd | 4 | not captured | [1352034](https://www.ncbi.nlm.nih.gov/pubmed/1352034) | metadata signals extractable PD data (EC50) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Greenblatt_2003.pdf` | Greenblatt DJ et al., Human cytochromes mediating gepirone bi…, Biopharmaceutics & drug dis… (2003) | pgx | 7 | [10.1002/bdd.340](https://doi.org/10.1002/bdd.340) | [12619053](https://www.ncbi.nlm.nih.gov/pubmed/12619053) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Caccia_2004.pdf` | Caccia S, Metabolism of the newest antidepressant…, IDrugs : the investigationa… (2004) | pgx | 5 | not captured | [15057659](https://www.ncbi.nlm.nih.gov/pubmed/15057659) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-06T23:11:09.223583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohmaker_1993 | irrelevant | 0 | 0 | Pharmacology study of 5-HT1A receptor desensitization in rats; no PK parameters for gepirone. |
| PGx | Caccia_2004 | not_relevant | 3 | 2 | Only states gepirone is metabolized by CYP3A4/CYP2D6; no genotype/phenotype effect on a PK/PD parameter is reported. |
| popPK | Callahan_1997 | irrelevant | 0 | 0 | Behavioral drug-discrimination study in rats with no pharmacokinetic parameters for gepirone reported. |
| PD | Callahan_1997 | not_relevant | 2 | 1 | The paper reports qualitative behavioral observations (lack of effect) for gepirone in a drug discrimination paradigm, but provides no numeric concentration-effect or dose-response parameters (e.g., ED50, Emax) for gepirone itself. |
| popPK | Claustre_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in rat hippocampal slices and does not report pharmacokinetic parameters for gepirone. |
| popPK | DeBattista_2024 | irrelevant | 0 | 0 | The paper is a general review of new psychotropic drugs that mentions gepirone's approval and mechanism but contains no quantitative pharmacokinetic parameters or disposition data. |
| PD | DeBattista_2024 | not_relevant | 0 | 0 | The text is a general review of new psychotropic drugs and mentions gepirone's mechanism and approval history, but it does not report any pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for gepirone. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | General dosing handbook with no pharmacogenomic effect on gepirone PK/PD parameters reported. |
| popPK | Eison_1986 | irrelevant | 0 | 0 | Behavioral pharmacology study of serotonergic mechanisms with no PK parameters or numeric disposition values. |
| PD | Eison_1986 | not_relevant | 3 | 0 | The text describes a qualitative shift in the dose-response curve but does not provide numeric PD parameters or extractable data. |
| popPK | Gałka_2025 | irrelevant | 2 | 0 | Narrative review of gepirone's pharmacology with no original PK parameter values reported. |
| popPK | Greenblatt_2003 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| popPK | Haddjeri_1999 | irrelevant | 0 | 0 | This is a rat neurophysiology study of flesinoxan; gepirone is only mentioned as a comparator with no PK parameters or numeric values. |
| PD | Haddjeri_1999 | not_relevant | 1 | 0 | The paper focuses on flesinoxan and only qualitatively mentions gepirone as a comparison for tonic activation, without providing any numeric PD parameters or exposure-response data for gepirone. |
| popPK | Johnson_1996 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| popPK | Konstantakopoulos_2025 | irrelevant | 0 | 0 | The paper is a narrative review of the drug's discovery and development history, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Konstantakopoulos_2025 | not_relevant | 2 | 1 | The text is a high-level review of gepirone's discovery and development, mentioning its pharmacodynamic profile qualitatively but providing no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Matheson_1994 | irrelevant | 1 | 2 | This is a pharmacodynamic (ED50) electrophysiology study in rats, not a PK study reporting disposition parameters for gepirone. |
| popPK | McMillen_1987 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study focusing on behavioral and neurochemical effects (aggression, monoamine metabolism, receptor binding) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Millan_1991 | irrelevant | 0 | 0 | Pharmacodynamic interaction study of 5-HT1A agonists with opioids in rodents; no PK parameters for gepirone. |
| popPK | Nader_1993 | irrelevant | 0 | 0 | Behavioral pharmacology study in pigeons with ED50 values only; no PK disposition parameters for gepirone. |
| popPK | Nader_1994 | irrelevant | 0 | 0 | Behavioral drug-discrimination study in monkeys with no PK parameters for gepirone. |
| popPK | Okada_1989 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| popPK | Sanger_1989 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for gepirone. |
| PD | Sanger_1989 | not_relevant | 2 | 1 | The paper describes qualitative dose-response observations (e.g., bell-shaped curve for 8-OH-DPAT) but does not provide numeric PD parameters or extractable concentration-effect data for gepirone. |
| popPK | Scott_1994 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Söderpalm_1989 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters reported. |
| popPK | Söderpalm_1990 | irrelevant | 0 | 0 | Behavioral pharmacology study of serotonergic agents; no PK parameters for gepirone reported. |
| PD | Söderpalm_1990 | not_relevant | 2 | 0 | The paper describes qualitative dose-response trends (biphasic effects) in an animal model but does not provide numeric PD parameters, concentration-effect curves, or quantitative PK/PD modeling data. |
| PGx | Tandon_2004 | not_relevant | 0 | 0 | Medicinal chemistry study of CYP3A4 metabolic stability; no gene variant/genotype effect on gepirone PK/PD reported. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Yang_2025 | not_relevant | 3 | 2 | The paper reports in vitro enzyme inhibition (IC50) and in vivo pharmacokinetic interaction (exposure changes), but does not report a pharmacodynamic (concentration-effect) relationship for gepirone itself. |
| popPK | Yocca_1992 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Yocca_1992 | not_relevant | 0 | 0 | The study is an in vitro receptor binding and functional assay analysis using irreversible antagonism to determine receptor reserve; it does not report in vivo pharmacokinetic or pharmacodynamic exposure-response relationships for gepirone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
