<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;aminocaproic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminocaproicAcid_Ross2007_reference&quot;,&quot;label&quot;:&quot;Ross_2007_reference&quot;,&quot;href&quot;:&quot;drugs/drug_aminocaproic_acid/AminocaproicAcid_Ross2007_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aminocaproic acid

- **generic name:** aminocaproic acid
- **ATC codes:** `B02AA01`
- **DrugBank:** [DB00513](https://go.drugbank.com/drugs/DB00513)
- **groups:** approved, investigational

## About

**Description.** An antifibrinolytic agent that acts by inhibiting plasminogen activators which have fibrinolytic properties.

**Indication.** For use in the treatment of excessive postoperative bleeding.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 02:43 | 2:27 | 1/0/0 | 0/0/0 | 0/0/0 | 28,402/4,533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Ross_2007_reference](drugs/drug_aminocaproic_acid/AminocaproicAcid_Ross2007_reference.md) | Ross J et al., Pharmacokinetics and pharmacodynamics o…, American journal of veterin… (2007) | [10.2460/ajvr.68.9.1016](https://doi.org/10.2460/ajvr.68.9.1016) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminocaproic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…Sixty-five percent of the dose is recovered in the urine as unchanged drug and 11% of the…”</sub> | prose |
| metabolism | liver | `AOX1` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Renal excretion is the primary route of elimination, whether amin…”</sub> | prose |

<sub>Actors without a tissue in the table: LPA (other), PLAT (target), PLG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eaton_2015.pdf` | Eaton MP et al., Pharmacokinetics of ε-Aminocaproic Acid…, Anesthesiology (2015) | popPK | 10 | [10.1097/ALN.0000000000000616](https://doi.org/10.1097/ALN.0000000000000616) | [25723765](https://pubmed.ncbi.nlm.nih.gov/25723765) | The paper reports a population PK model for aminocaproic acid in neonates with a specific quantitative clearance value (5.07 l/h) and dosing parameters derived from the model. |
| `Ririe_2002.pdf` | Ririe DG et al., The pharmacokinetics of epsilon-aminoca…, Anesthesia and analgesia (2002) | popPK | 10 | [10.1097/00000539-200201000-00008](https://doi.org/10.1097/00000539-200201000-00008) | [11772798](https://pubmed.ncbi.nlm.nih.gov/11772798) | The paper is a relevant PK study for aminocaproic acid, but the specific numeric parameter values are not present in the provided abstract text. |
| `Stricker_2013.pdf` | Stricker PA et al., Population pharmacokinetics of epsilon-…, British journal of anaesthe… (2013) | popPK | 10 | [10.1093/bja/aes507](https://doi.org/10.1093/bja/aes507) | [23353035](https://pubmed.ncbi.nlm.nih.gov/23353035) | The paper reports a population PK model for aminocaproic acid with explicit numeric values for clearance, intercompartmental clearance, and volumes of distribution in the text. |
| `Stricker_2015.pdf` | Stricker PA et al., Population pharmacokinetics of ϵ-aminoc…, British journal of anaesthe… (2015) | popPK | 10 | [10.1093/bja/aeu459](https://doi.org/10.1093/bja/aeu459) | [25586726](https://pubmed.ncbi.nlm.nih.gov/25586726) | The paper reports a population PK model for aminocaproic acid with explicit numeric values for clearance, volume of distribution, and intercompartmental clearance in the abstract. |
| `Maxwell_2023.pdf` | Maxwell L et al., Pharmacokinetics of aminocaproic acid i…, Journal of veterinary pharm… (2023) | popPK | 9 | [10.1111/jvp.13124](https://doi.org/10.1111/jvp.13124) | [36994984](https://pubmed.ncbi.nlm.nih.gov/36994984) | The study reports a three-compartment model and terminal half-life for aminocaproic acid in horses, but specific numeric values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided text. |

<sub>queue written 2026-09-06T02:41:41.649077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gupta_2026 | irrelevant | 0 | 0 | The study is a clinical trial comparing blood loss outcomes, not a pharmacokinetic study, and reports no PK parameters for aminocaproic acid. |
| popPK | Janecki_1991 | irrelevant | 0 | 0 | The paper is an in-vitro study on Sertoli cell tight junctions where aminocaproic acid is used only as an antiprotease control, not as a subject drug for pharmacokinetic analysis. |
| popPK | Maxwell_2023 | relevant | 9 | 4 | The study reports a three-compartment model and terminal half-life for aminocaproic acid in horses, but specific numeric values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided text. |
| popPK | Ririe_2002 | relevant | 10 | 2 | The paper is a relevant PK study for aminocaproic acid, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Wagner_2017 | irrelevant | 1 | 0 | The study is an in vitro assessment of drug sequestration in an ECMO circuit and does not report pharmacokinetic disposition parameters (CL, V, ka) for aminocaproic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-06 02:42 UTC</sub>
