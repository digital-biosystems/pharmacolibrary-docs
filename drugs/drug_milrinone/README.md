# milrinone

- **generic name:** milrinone
- **ATC codes:** `C01CE02`
- **DrugBank:** [DB00235](https://go.drugbank.com/drugs/DB00235)
- **groups:** approved, investigational

## About

**Description.** Heart failure is a multifactorial condition that affects roughly 1-2% of the adult population. Often the result of long-term myocardial ischemia, cardiomyopathy, or other cardiac insults, heart failure results from an inability of the heart to perfuse peripheral tissues with sufficient oxygen and metabolites, resulting in complex systemic pathologies. Heart failure is underpinned by numerous physiological changes, including alteration in β-adrenergic signalling and cyclic adenosine monophosphate (cAMP) production, which affects the heart's contractile function and cardiac output.[A228323] Milrinone is a second-generation bipyridine phosphodiesterase (PDE) inhibitor created through chemical modification of [amrinone].[A228333] As a PDE-III inhibitor, milrinone results in increased cAMP levels and improves cardiac function and peripheral vasodilation in acute decongested heart failure.[A228338, A11759, A228323, A228333, A228348, L31483]

Milrinone was originally synthesized at the Sterling Winthrop Research Institute in the 1980s.[A228333] It was approved by the FDA on December 31, 1987, and was marketed under the trademark PRIMACOR® by Sanofi-Aventis US before being discontinued.[L31483]

**Indication.** Milrinone is indicated for the short-term (48 hours or less) treatment of patients with acute decompensated heart failure. Milrinone administration should occur together with close monitoring using appropriate electrocardiographic equipment and should occur in a facility equipped for the immediate treatment of potential cardiac events, including ventricular arrhythmias.[L31483]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 20:08 | 2:52 | 0/3/0 | 0/0/0 | 0/0/0 | 54,085/3,790 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [OHanlon_2024](drugs/drug_milrinone/Milrinone_OHanlon2024_final_estimate.md) | OHanlon (2024) | — |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [OHanlon_2024](drugs/drug_milrinone/Milrinone_OHanlon2024_final_estimate_paediatric_patients_pre.md) | OHanlon (2024) | — |
| <span class="pk-badge pk-badge--neutral">None</span> | [OHanlon_2024](drugs/drug_milrinone/Milrinone_OHanlon2024_units.md) | OHanlon (2024) | — |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [OHanlon_2024](drugs/drug_milrinone/Milrinone_OHanlon2024_units_paediatric_patients_premature_ne.md) | OHanlon (2024) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Giaccone_2017](drugs/drug_milrinone/Milrinone_Giaccone2017_reference.md) | Giaccone A et al., Milrinone Pharmacokinetics and Pharmaco…, American journal of perinat… (2017) | [10.1055/s-0036-1597996](https://doi.org/10.1055/s-0036-1597996) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hallik_2019](drugs/drug_milrinone/Milrinone_Hallik2019_reference.md) | Hallik M et al., Population Pharmacokinetics and Dosing…, Pediatric critical care med… (2019) | [10.1097/PCC.0000000000001879](https://doi.org/10.1097/PCC.0000000000001879) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hornik_2019](drugs/drug_milrinone/Milrinone_Hornik2019_reference.md) | Hornik CP et al., Population Pharmacokinetics of Milrinon…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1499](https://doi.org/10.1002/jcph.1499) |

## Coverage

- **PubMed hits:** 96 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benotti_1985.pdf` | Benotti JR et al., Pharmacokinetics and pharmacodynamics o…, The American journal of car… (1985) | popPK | 10 | [10.1016/0002-9149(85)91036-7](https://doi.org/10.1016/0002-9149(85)91036-7) | [4050707](https://pubmed.ncbi.nlm.nih.gov/4050707) | The paper reports quantitative PK parameters (clearance, volume of distribution, half-life) for milrinone in humans, with all numeric values explicitly present in the text. |
| `Giaccone_2017.pdf` | Giaccone A et al., Milrinone Pharmacokinetics and Pharmaco…, American journal of perinat… (2017) | popPK | 10 | [10.1055/s-0036-1597996](https://doi.org/10.1055/s-0036-1597996) | [28099979](https://pubmed.ncbi.nlm.nih.gov/28099979) | The paper reports a population PK model for milrinone with a specific numeric clearance value (7.65 mL/min/3.4 kg) in the abstract. |
| `Hornik_2019.pdf` | Hornik CP et al., Population Pharmacokinetics of Milrinon…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1499](https://doi.org/10.1002/jcph.1499) | [31317556](https://pubmed.ncbi.nlm.nih.gov/31317556) | The paper reports a population PK model for milrinone with explicit numeric equations for clearance and volume of distribution in the text. |

<sub>queue written 2026-09-09T20:05:40.432554+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_milrinone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
