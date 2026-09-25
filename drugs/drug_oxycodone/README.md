<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxycodone_Saari2012_reference&quot;,&quot;label&quot;:&quot;Saari_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Saari2012_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# oxycodone

- **generic name:** oxycodone
- **ATC codes:** `N02AA05`, `N02AA55`, `N02AA56`, `N02AJ17`, `N02AJ18`, `N02AJ19`
- **DrugBank:** [DB00497](https://go.drugbank.com/drugs/DB00497)
- **groups:** approved, illicit, investigational

## About

**Description.** Oxycodone is a semisynthetic opioid analgesic derived from thebaine in Germany in 1917.[A178696] It is currently indicated as an immediate release product for moderate to severe pain and as an extended release product for chronic moderate to severe pain requiring continuous opioid analgesics for an extended period.[Label] The first oxycodone containing product, Percodan, was approved by the FDA on April 12, 1950.[L6460]

**Indication.** Oxycodone is indicated for the treatment of moderate to severe pain.[Label] There is also an extended release formulation indicated for chronic moderate to severe pain requiring continuous opioid analgesics for an extended period.[Label]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 06:15 | 5:45 | 1/1/0 | 0/0/0 | 0/0/0 | 146,180/14,807 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Shi_2026_reference](drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md) | Shi S et al., Pharmacokinetics of intravenous oxycodo…, Frontiers in medicine (2026) | [10.3389/fmed.2026.1834903](https://doi.org/10.3389/fmed.2026.1834903) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.474). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Saari_2012_reference](drugs/drug_oxycodone/Oxycodone_Saari2012_reference.md) | Saari TI et al., Oxycodone clearance is markedly reduced…, British journal of anaesthe… (2012) | [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxycodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Oxycodone and its metabolites are eliminated in the urine.[Label] Unbound noroxycodone mak…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1B (inhibitor), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 95 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ing_2012 | irrelevant | 1 | 0 | The paper is a review of PK/PD modeling in analgesics that discusses oxycodone qualitatively but does not report original quantitative disposition parameters (CL, V, etc.) for oxycodone. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that discusses PK/PD concepts and models for opioids, including oxycodone, but does not report specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect data for oxycodone in the provided text. |
| popPK | Jansen_2026 | relevant | 9 | 1 | The study reports population PK parameters for oxycodone, but the specific numeric values are located in the Supplemental Digital Content which is not provided. |
| popPK | Shram_2023 | irrelevant | 0 | 0 | The study evaluates the abuse potential of esmethadone using oxycodone only as a positive control, and no quantitative pharmacokinetic parameters (CL, V, etc.) for oxycodone are reported in the provided text. |
| PD | Shram_2023 | not_relevant | 0 | 0 | The paper evaluates the abuse potential of esmethadone using oxycodone as a positive control, but it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., EC50, Emax) for oxycodone itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-19 01:52 UTC</sub>
