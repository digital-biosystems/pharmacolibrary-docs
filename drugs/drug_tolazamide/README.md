<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;tolazamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolazamide_Welling1982_healthy_male_volunteers&quot;,&quot;label&quot;:&quot;Welling_1982_healthy male volunteers&quot;,&quot;href&quot;:&quot;drugs/drug_tolazamide/Tolazamide_Welling1982_healthy_male_volunteers.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tolazamide

- **generic name:** tolazamide
- **ATC codes:** `A10BB05`
- **DrugBank:** [DB00839](https://go.drugbank.com/drugs/DB00839)
- **groups:** approved

## About

**Description.** A sulphonylurea hypoglycemic agent with actions and uses similar to those of chlorpropamide.

**Indication.** For use as an adjunct to diet to lower the blood glucose in patients with non-insulin dependent diabetes mellitus (Type II) whose hyperglycemia cannot be satisfactorily controlled by diet alone.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:54 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 12,883/878 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Welling_1982_healthy male volunteers](drugs/drug_tolazamide/Tolazamide_Welling1982_healthy_male_volunteers.md) | Welling PG et al., Bioavailability of tolazamide from tabl…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600711119](https://doi.org/10.1002/jps.2600711119) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolazamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Rapidly and well absorbed from the gastrointestinal tract.…”</sub> | prose |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | kidney | <sub>“…tivity from 0% to 70%. They are excreted principally in the urine.…”</sub> | prose |

<sub>Actors without a tissue in the table: ABCC8 (blocker), KCNJ10 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abidi_1982_2.pdf` | Abidi SE et al., Pharmacokinetic interactions of tolazam…, Journal of pharmaceutical s… (1982) | popPK | 9 | [10.1002/jps.2600710107](https://doi.org/10.1002/jps.2600710107) | [7057374](https://pubmed.ncbi.nlm.nih.gov/7057374) | The paper describes a pharmacokinetic study of tolazamide in dogs using a two-compartment model, but the specific numeric parameter values (alpha, beta, Vd) are not present in the provided evidence. |
| `Welling_1982.pdf` | Welling PG et al., Bioavailability of tolazamide from tabl…, Journal of pharmaceutical s… (1982) | popPK | 8 | [10.1002/jps.2600711119](https://doi.org/10.1002/jps.2600711119) | [7175719](https://pubmed.ncbi.nlm.nih.gov/7175719) | The study reports quantitative PK parameters (half-lives, absorption rate) for tolazamide, but lacks explicit clearance or volume values. |

<sub>queue written 2026-09-16T01:54:28.089764+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_1982_2 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of tolazamide in dogs using a two-compartment model, but the specific numeric parameter values (alpha, beta, Vd) are not present in the provided evidence. |
| PD | Abidi_1982_2 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (alpha, beta, Vd) and their changes with dosage or co-administration, with no pharmacodynamic or exposure-response analysis. |
| PD | Kabadi_1985 | not_relevant | 1 | 0 | The paper reports clinical efficacy (insulin dose reduction, HbA1 improvement) but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| PD | Melchior_1996 | not_relevant | 0 | 0 | The paper is a clinical review of metformin and does not report any pharmacodynamic or exposure-response data for tolazamide. |
| PD | Ozawa_2003 | not_relevant | 0 | 0 | The paper is a historical review of the development and epidemiology of antidiabetic drugs in Japan and contains no pharmacokinetic or pharmacodynamic data, models, or numeric parameters for tolazamide. |
| popPK | Prendergast_1984 | irrelevant | 0 | 0 | The paper is a review of glyburide and glipizide, and tolazamide is only mentioned as a comparator for efficacy, with no pharmacokinetic parameters reported for it. |
| PD | Prendergast_1984 | not_relevant | 1 | 0 | The paper is a general review of glyburide and glipizide that only qualitatively mentions tolazamide as a comparator for efficacy, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters for tolazamide. |
| PD | RENNIE_1963 | not_relevant | 2 | 1 | The paper reports a clinical comparison of stability and mean effects (blood sugar, glycosuria) between two drugs but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| PD | Severin_1987 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting a nitrosamine impurity in tolazamide and contains no pharmacodynamic or exposure-response data. |
| PD | Tsuchiya_1984 | not_relevant | 0 | 0 | The paper reports in vitro protein binding capacity changes due to albumin glucosylation, not a pharmacodynamic exposure-response or dose-response relationship for drug efficacy. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-16 01:54 UTC</sub>
