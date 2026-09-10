# famotidine

- **generic name:** famotidine
- **ATC codes:** `A02BA03`
- **DrugBank:** [DB00927](https://go.drugbank.com/drugs/DB00927)
- **groups:** approved, investigational

## About

**Description.** Famotidine is a competitive histamine-2 (H<sub>2</sub>) receptor antagonist that works to inhibit gastric acid secretion. It is commonly used in gastrointestinal conditions related to acid secretion, such as gastric ulcers and gastroesophageal reflux disease (GERD), in adults and children.[L11166] Compared to other H<sub>2</sub> receptor antagonists, famotidine displays high selectivity towards this receptor; in a study consisting of healthy volunteers and patients with acid hypersecretory disease, famotidine was about 20 to 50 times more potent at inhibiting gastric acid secretion than [cimetidine] and eight times more potent than [ranitidine] on a weight basis.[A189462] Famotidine is used in various over-the-counter and off-label uses.[L11166] While oral formulations of famotidine are more commonly used, the intravenous solution of the drug is available for use in hospital settings.[L11142]

**Indication.** Famotidine is indicated in pediatric and adult patients (with the bodyweight of 40 kg and above) for the management of active duodenal ulcer (DU), active gastric ulcer, symptomatic non-erosive gastroesophageal reflux disease (GERD), and erosive esophagitis due to GERD, diagnosed by biopsy.[L11139]

It is also indicated in adult patients for the treatment of pathological hypersecretory conditions (e.g., Zollinger-Ellison Syndrome, multiple endocrine neoplasias) and reduction of the risk of DU recurrence.[L11139]

The intravenous formulation of famotidine is available for some hospitalized patients with pathological hypersecretory conditions or intractable ulcers or as an alternative to the oral dosage form for short-term use in patients who are unable to take oral medication.[L11142]

Over-the-counter famotidine is used for the management and prevention of heartburn caused by gastroesophageal reflux in children and adults. Off-label uses of famotidine include the reduction of NSAIDs-associated gastrointestinal effects, treatment of refractory urticarial, prevention of stress ulcer in critically-ill patients, and symptomatic relief of gastritis.[L11166,L11172]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 15:00 | 3:48 | 3/0/0 | 0/1/0 | 0/0/0 | 44,714/10,466 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ikawa_2007](drugs/drug_famotidine/Famotidine_Ikawa2007_reference.md) | Ikawa K et al., Pharmacokinetic and pharmacodynamic pro…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.1003](https://doi.org/10.1248/bpb.30.1003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Maish_1998](drugs/drug_famotidine/Famotidine_Maish1998_reference.md) | Maish WA et al., Pharmacokinetics of famotidine in patie…, Journal of clinical pharmac… (1998) | [10.1177/009127009803801104](https://doi.org/10.1177/009127009803801104) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McCann_2023](drugs/drug_famotidine/Famotidine_McCann2023_reference.md) | McCann S et al., Population Pharmacokinetics of Posacona…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01254-2](https://doi.org/10.1007/s40262-023-01254-2) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ikawa_2007](drugs/drug_famotidine/pd_Ikawa_2007_pH.md) | Ikawa K et al., Pharmacokinetic and pharmacodynamic pro…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.1003](https://doi.org/10.1248/bpb.30.1003) |

## Coverage

- **PubMed hits:** 29 matched, 19 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Escher_2024.pdf` | Escher OG et al., Pharmacokinetics of famotidine in goats…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13449](https://doi.org/10.1111/jvp.13449) | [38720597](https://pubmed.ncbi.nlm.nih.gov/38720597) | The study reports quantitative non-compartmental pharmacokinetic parameters (Vd, t1/2, MRT, AUC) for famotidine in goats directly in the text. |
| `Maish_1998.pdf` | Maish WA et al., Pharmacokinetics of famotidine in patie…, Journal of clinical pharmac… (1998) | popPK | 10 | [10.1177/009127009803801104](https://doi.org/10.1177/009127009803801104) | [9824781](https://pubmed.ncbi.nlm.nih.gov/9824781) | The study reports quantitative compartmental PK parameters (Cl, Vd, t1/2) for famotidine with specific numeric values present in the text. |
| `Nagita_1994.pdf` | Nagita A et al., Pharmacokinetics and pharmacodynamics o…, Therapeutic drug monitoring (1994) | popPK | 10 | [10.1097/00007691-199410000-00002](https://doi.org/10.1097/00007691-199410000-00002) | [7846741](https://pubmed.ncbi.nlm.nih.gov/7846741) | The paper reports quantitative pharmacokinetic parameters (Vd, t1/2, AUC, bioavailability) for famotidine in children, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-10T14:56:53.650354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | McCann_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, with famotidine serving only as a co-administered drug to assess its effect on posaconazole bioavailability. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of atogepant, with famotidine mentioned only as a concomitant medication that does not require dose adjustment. |
| popPK | Wilton_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the FAK scaffold inhibitor C4 in dogs, not famotidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_famotidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
