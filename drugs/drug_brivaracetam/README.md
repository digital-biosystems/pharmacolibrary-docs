<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;brivaracetam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brivaracetam_Schoemaker2017v2_reference&quot;,&quot;label&quot;:&quot;Schoemaker_2017_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Schoemaker2017v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# brivaracetam

- **generic name:** brivaracetam
- **ATC codes:** `N03AX23`
- **DrugBank:** [DB05541](https://go.drugbank.com/drugs/DB05541)
- **groups:** approved, investigational

## About

**Description.** Brivaracetam is a racetam derivative of levetiracetam used in the treatment of partial-onset seizures. Brivaracetam binds SV2A with 20 times higher affinity than levetiracetam [A19184]. It is available under the brand name Briviact made by UCB. Briviact received FDA approval on February 19, 2016 [L760].

**Indication.** Used as adjunctive therapy for partial-onset seizures in patients 16 years of age or older.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 09:24 | 0:46 | 0/1/0 | 0/0/0 | 0/0/0 | 20,633/870 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schoemaker_2017_2_reference](drugs/drug_brivaracetam/Brivaracetam_Schoemaker2017v2_reference.md) | Schoemaker (2017) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brivaracetam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…with &lt;10% of the parent compound unchanged. &lt;1% excreted in feces [FDA Label].…”</sub> | prose |
| excretion | kidney | <sub>“…\&gt;95% excreted in urine with &lt;10% of the parent compound unchanged. &lt;1% excreted in…”</sub> | prose |

<sub>Actors without a tissue in the table: SCN1A (inhibitor), SV2A (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoemaker_2016.pdf` | Schoemaker R et al., Brivaracetam Population Pharmacokinetic…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.761](https://doi.org/10.1002/jcph.761) | [27146213](https://pubmed.ncbi.nlm.nih.gov/27146213) | The paper is a population PK study for brivaracetam, but the provided evidence contains only qualitative descriptions and relative changes (e.g., % decrease in exposure) without specific numeric parameter values (CL, V, etc.). |
| `Brochot_2010.pdf` | Brochot A et al., Physiologically based pharmacokinetic/p…, Basic & clinical pharmacolo… (2010) | popPK | 8 | [10.1111/j.1742-7843.2009.00536.x](https://doi.org/10.1111/j.1742-7843.2009.00536.x) | [20102365](https://pubmed.ncbi.nlm.nih.gov/20102365) | The paper describes a PBPK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Jukier_2024.pdf` | Jukier T et al., Single intravenous and oral dose pharma…, Journal of veterinary pharm… (2024) | popPK | 8 | [10.1111/jvp.13473](https://doi.org/10.1111/jvp.13473) | [39018069](https://pubmed.ncbi.nlm.nih.gov/39018069) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC, half-life, bioavailability) for brivaracetam in cats, with all numeric values explicitly present in the text. |
| `Schoemaker_2017.pdf` | Schoemaker R et al., Evaluation of brivaracetam efficacy as…, Epilepsy research (2017) | popPK | 8 | [10.1016/j.eplepsyres.2017.09.014](https://doi.org/10.1016/j.eplepsyres.2017.09.014) | [28982069](https://pubmed.ncbi.nlm.nih.gov/28982069) | The paper describes a population PK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-21T09:23:51.256375+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aicua-Rapun_2019 | irrelevant | 2 | 0 | The study is a clinical correlation analysis of loading doses and response, not a PK parameter estimation study, and no quantitative PK parameters (CL, V, etc.) are reported in the evidence. |
| popPK | Brochot_2010 | relevant | 8 | 0 | The paper describes a PBPK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Laurell_2023 | irrelevant | 1 | 0 | The study focuses on PET kinetic modeling for target occupancy in pigs, not on the pharmacokinetic disposition parameters (CL, V, etc.) of brivaracetam. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The paper is a simulation study using existing population PK models for 14 drugs, and the specific numeric parameter values for brivaracetam are not reported in the provided evidence. |
| popPK | Schoemaker_2016 | relevant | 10 | 0 | The paper is a population PK study for brivaracetam, but the provided evidence contains only qualitative descriptions and relative changes (e.g., % decrease in exposure) without specific numeric parameter values (CL, V, etc.). |
| popPK | Schoemaker_2017 | relevant | 8 | 0 | The paper describes a population PK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 09:23 UTC</sub>
