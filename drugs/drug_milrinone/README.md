<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;milrinone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Milrinone_OHanlon2024_final_estimate&quot;,&quot;label&quot;:&quot;OHanlon_2024_final_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_OHanlon2024_final_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Milrinone_Hallik2019_reference&quot;,&quot;label&quot;:&quot;Hallik_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_Hallik2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Milrinone_OHanlon2024_units&quot;,&quot;label&quot;:&quot;OHanlon_2024_units&quot;,&quot;href&quot;:&quot;drugs/drug_milrinone/Milrinone_OHanlon2024_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-09 20:08 | 2:52 | 1/2/0 | 0/0/0 | 0/0/0 | 54,085/3,790 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [OHanlon_2024_final_estimate](drugs/drug_milrinone/Milrinone_OHanlon2024_final_estimate.md) | OHanlon (2024) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hallik_2019_reference](drugs/drug_milrinone/Milrinone_Hallik2019_reference.md) | Hallik M et al., Population Pharmacokinetics and Dosing…, Pediatric critical care med… (2019) | [10.1097/PCC.0000000000001879](https://doi.org/10.1097/PCC.0000000000001879) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [OHanlon_2024_units](drugs/drug_milrinone/Milrinone_OHanlon2024_units.md) | OHanlon (2024) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=milrinone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Milrinone is primarily excreted in the urine, with 60% of a dose recovered after two hours…”</sub> | prose |

<sub>Actors without a tissue in the table: PDE3A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 96 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
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
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-09 20:07 UTC</sub>
