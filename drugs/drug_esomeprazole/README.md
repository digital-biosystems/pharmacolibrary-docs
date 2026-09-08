# esomeprazole

- **generic name:** esomeprazole
- **ATC codes:** `A02BC05`, `M01AE52`
- **DrugBank:** [DB00736](https://go.drugbank.com/drugs/DB00736)
- **groups:** approved, investigational

## About

**Description.** Esomeprazole, sold under the brand name Nexium, is a proton pump inhibitor (PPI) medication used for the management of gastroesophageal reflux disease (GERD), for gastric protection to prevent recurrence of stomach ulcers or gastric damage from chronic use of NSAIDs, and for the treatment of pathological hypersecretory conditions including Zollinger-Ellison (ZE) Syndrome. It can also be found in quadruple regimens for the treatment of _H. pylori_ infections along with other antibiotics including [DB01060], [DB01211], and [DB00916], for example.[A177271, F4498] Its efficacy is considered similar to other medications within the PPI class including [DB00338], [DB00213], [DB00448], [DB05351], and [DB01129]. Esomeprazole is the s-isomer of [DB00338], which is a racemate of the S- and R-enantiomer. Esomeprazole has been shown to inhibit acid secretion to a similar extent as [DB00338], without any significant differences between the two compounds _in vitro_. 

Esomeprazole exerts its stomach acid-suppressing effects by preventing the final step in gastric acid production by covalently binding to sulfhydryl groups of cysteines found on the (H+, K+)-ATPase enzyme at the secretory surface of gastric parietal cells. This effect leads to inhibition of both basal and stimulated gastric acid secretion, irrespective of the stimulus. As the binding of esomeprazole to the (H+, K+)-ATPase enzyme is irreversible and new enzyme needs to be expressed in order to resume acid secretion, esomeprazole's duration of antisecretory effect persists longer than 24 hours.[FDA Label]

PPIs such as esomeprazole have also been shown to inhibit the activity of dimethylarginine dimethylaminohydrolase (DDAH), an enzyme necessary for cardiovascular health. DDAH inhibition causes a consequent accumulation of the nitric oxide synthase inhibitor asymmetric dimethylarginie (ADMA), which is thought to cause the association of PPIs with increased risk of cardiovascular events in patients with unstable cor

**Indication.** Esomeprazole is indicated for the treatment of acid-reflux disorders including healing and maintenance of erosive esophagitis, and symptomatic gastroesophageal reflux disease (GERD), peptic ulcer disease, H. pylori eradication, prevention of gastrointestinal bleeds with NSAID use, and for the long-term treatment of pathological hypersecretory conditions including Zollinger-Ellison Syndrome.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 3/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Gebreyesus_2022](drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md) | Gebreyesus MS et al., Population pharmacokinetics of esomepra…, British journal of clinical… (2022) | [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416) |

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nagase_2020.pdf` | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) | [32227647](https://pubmed.ncbi.nlm.nih.gov/32227647) | The paper explicitly develops and reports quantitative population pharmacokinetic parameters (clearance, volume of distribution, absorption transit constants, and variability) for esomeprazole in humans using NONMEM. |

<sub>queue written 2026-07-18T04:10:10.301161+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kirchheiner_2009_2 | irrelevant | not captured | not captured | The paper is a pharmacodynamic meta-analysis modeling dose-response effects on intragastric pH and contains no quantitative pharmacokinetic parameters for esomeprazole. |
| popPK | Litalien_2005 | irrelevant | not captured | not captured | The review explicitly states that no pharmacokinetic data are available for esomeprazole in children and contains no quantitative PK parameters for this drug. |
| popPK | Schlachter_2026 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for atogepant, with esomeprazole only mentioned as a concomitant medication. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_esomeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
