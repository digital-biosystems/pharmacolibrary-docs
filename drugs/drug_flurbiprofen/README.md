<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Yao2025_reference&quot;,&quot;label&quot;:&quot;Yao_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flurbiprofen_Kumpulainen2010v2_reference&quot;,&quot;label&quot;:&quot;Kumpulainen_2010_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flurbiprofen_Zhang2018_reference&quot;,&quot;label&quot;:&quot;Zhang_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# flurbiprofen

- **generic name:** flurbiprofen
- **ATC codes:** `M01AE09`, `M02AA19`, `R02AX01`, `S01BC04`
- **DrugBank:** [DB00712](https://go.drugbank.com/drugs/DB00712)
- **groups:** approved, investigational

## About

**Description.** Flurbiprofen, a propionic acid derivative, is a nonsteroidal anti-inflammatory agent (NSAIA) with antipyretic and analgesic activity. Oral formulations of flurbiprofen may be used for the symptomatic treatment of rheumatoid arthritis, osteoarthritis and anklylosing spondylitis. Flurbiprofen may also be used topically prior to ocular surgery to prevent or reduce intraoperative miosis. Flurbiprofen is structurally and pharmacologically related to fenoprofen, ibuprofen, and ketoprofen.

**Indication.** Flurbiprofen tablets are indicated for the acute or long-term symptomatic treatment of rheumatoid arthritis, osteorarthritis and anklosing spondylitis. It may also be used to treat pain associated with dysmenorrhea and mild to moderate pain accompanied by inflammation (e.g. bursitis, tendonitis, soft tissue trauma). Topical ophthalmic formulations may be used pre-operatively to prevent intraoperative miosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 3/0 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Yao_2025_reference](drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference.md) | Yao H et al., Exploring the Population Pharmacokineti…, Drug design, development an… (2025) | [10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.824). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kumpulainen_2010_2_reference](drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference.md) | Kumpulainen E et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03720.x](https://doi.org/10.1111/j.1365-2125.2010.03720.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2018_reference](drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md) | Zhang J et al., Population pharmacokinetic modeling of…, Journal of pain research (2018) | [10.2147/JPR.S176475](https://doi.org/10.2147/JPR.S176475) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flurbiprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor | DrugBank actor |
| excretion | mammary gland | <sub>“…Flurbiprofen is poorly excreted into human milk. Following dosing with flurbiprofen, less…”</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 20 returned
- **screened:** 3  ·  **relevant:** 7
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aarons_1991.pdf` | Aarons L, The kinetics of flurbiprofen in synovia…, Journal of pharmacokinetics… (1991) | popPK | 10 | [10.1007/BF03036250](https://doi.org/10.1007/BF03036250) | [1875281](https://pubmed.ncbi.nlm.nih.gov/1875281) | The paper explicitly reports quantitative population pharmacokinetic parameters (CL, V, ka, t1/2, and interindividual variability) for flurbiprofen derived from a NONMEM analysis in humans. |
| `Knihinicki_1990.pdf` | Knihinicki RD et al., Stereoselective disposition of ibuprofe…, Chirality (1990) | popPK | 10 | [10.1002/chir.530020303](https://doi.org/10.1002/chir.530020303) | [2252842](https://pubmed.ncbi.nlm.nih.gov/2252842) | The study explicitly reports quantitative two-compartment pharmacokinetic parameters including clearance, volume of distribution, and half-life for flurbiprofen enantiomers in rats. |
| `Menzel-Soglowek_1992.pdf` | Menzel-Soglowek S et al., Variability of inversion of (R)-flurbip…, Journal of pharmaceutical s… (1992) | popPK | 9 | [10.1002/jps.2600810909](https://doi.org/10.1002/jps.2600810909) | [1432634](https://pubmed.ncbi.nlm.nih.gov/1432634) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-life) for flurbiprofen enantiomers in dogs, guinea pigs, rats, and gerbils. |
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 9 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | The paper reports quantitative compartmental pharmacokinetic parameters (CL/F, Vd/F, and microconstants) for flurbiprofen derived from human plasma concentration-time data. |

<sub>queue written 2026-07-18T04:28:50.849353+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | unknown_2019 | irrelevant | not captured | not captured | The text is an editorial notice regarding clinical trial registration discrepancies and contains no pharmacokinetic data or mention of flurbiprofen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:06 UTC</sub>
