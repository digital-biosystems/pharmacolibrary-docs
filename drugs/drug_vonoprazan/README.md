<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;vonoprazan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vonoprazan_Echizen2016_reference&quot;,&quot;label&quot;:&quot;Echizen_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vonoprazan/Vonoprazan_Echizen2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# vonoprazan

- **generic name:** vonoprazan
- **ATC codes:** `A02BC08`, `A02BD17`
- **DrugBank:** [DB11739](https://go.drugbank.com/drugs/DB11739)
- **groups:** approved, investigational

## About

**Description.** Vonoprazan is a potassium-competitive acid blocker (PCAB) that inhibits H<sup>+</sup>, K<sup>+</sup>-ATPase-mediated gastric acid secretion. PCABs represent an alternative to proton-pump inhibitors for the treatment of acid-related disorders. Unlike proton-pump inhibitors, PCABs are not affected by CYP2C19 genetic polymorphisms and do not require acid-resistant formulations.[A253702] Furthermore, vonoprazan is 350-times more potent than the proton-pump inhibitor [lansoprazole], thanks to its ability to accumulate in the gastric corpus mucosa, specifically in the parietal cells.[A253707] 

In February 2015, vonoprazan was first marketed in Japan for the treatment of acid-related disorders and as an adjunct to _Helicobacter pylori_ (_H. pylori_) eradication.[A253702] In May 2022, the FDA approved the use of vonoprazan in a co-packaged product containing amoxicillin and clarithromycin for the treatment of _H. pylori_ infection.[L41695] Studies have shown that the concomitant use of vonoprazan, amoxicillin, and clarithromycin leads to an _H. pylori_ eradication rate of approximately 90%.[A253742]

**Indication.** Vonoprazan is indicated for the following conditions: 

- for healing of all grades of erosive esophagitis and relief of heartburn associated with erosive esophagitis in adults.[L51224]
- to maintain healing of all grades of erosive esophagitis and relief of heartburn associated with erosive esophagitis in adults.[L51224]
- for the relief of heartburn associated with non-erosive gastroesophageal reflux disease in adults.[L51224]
- in combination with [amoxicillin] and [clarithromycin] for the treatment of Helicobacter pylori (_H. pylori_) infection in adults.[L41695, L51224]
- in combination with amoxicillin for the treatment of H. pylori infection in adults.[L51224]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:59 | 1:57 | 0/1/0 | 0/0/0 | 0/0/0 | 40,981/1,183 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Echizen_2016_reference](drugs/drug_vonoprazan/Vonoprazan_Echizen2016_reference.md) | Echizen H, The First-in-Class Potassium-Competitiv…, Clinical pharmacokinetics (2016) | [10.1007/s40262-015-0326-7](https://doi.org/10.1007/s40262-015-0326-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vonoprazan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Vonoprazan is excreted in urine (67%) and feces (31%). Approximately 8% and 1.4% of the do…”</sub> | prose |
| excretion | kidney | <sub>“…Vonoprazan is excreted in urine (67%) and feces (31%). Approximately 8% and 1.4% of the do…”</sub> | prose |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4A (modulator), ATP4B (modulator).</sub>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mulford_2026.pdf` | Mulford DJ et al., The pharmacokinetics and safety of vono…, Journal of pediatric gastro… (2026) | popPK | 9 | [10.1002/jpn3.70368](https://doi.org/10.1002/jpn3.70368) | [41721637](https://pubmed.ncbi.nlm.nih.gov/41721637) | The paper describes a population PK study for vonoprazan in pediatrics, but the specific numeric parameter values (CL/F, Vc/F) are not present in the provided abstract text. |

<sub>queue written 2026-09-18T08:57:42.816581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gatta_2023 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Gatta_2023 | not_relevant | 1 | 0 | The provided text is only the title of an editorial and does not contain the full text or any numeric PD parameters. |
| popPK | Mulford_2026 | relevant | 9 | 2 | The paper describes a population PK study for vonoprazan in pediatrics, but the specific numeric parameter values (CL/F, Vc/F) are not present in the provided abstract text. |
| popPK | Scarpignato_2023 | irrelevant | 2 | 0 | The study uses an existing population PK model to derive PK/PD simulations but does not report the specific quantitative PK parameter values (CL, V, etc.) for vonoprazan in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vonoprazan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
