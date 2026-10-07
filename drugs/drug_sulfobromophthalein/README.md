<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;sulfobromophthalein&quot;}]"></div>

# sulfobromophthalein

- **generic name:** sulfobromophthalein
- **ATC codes:** `V04CE02`
- **DrugBank:** [DB13215](https://go.drugbank.com/drugs/DB13215) · **PubChem:** not captured
- **molar mass:** 794.03 g/mol (C20H10Br4O10S2) — DrugBank
- **groups:** experimental

## About

Sulfobromophthalein is a diagnostic agent used to test liver functional capacity. It is currently regarded as an experimental compound, so it does not appear to be in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27132840](https://www.wikidata.org/wiki/Q27132840) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:52 | 0:37 | 0/2/0 | 0/0/0 | 0/0/0 | 36,266/1,604 | ollama / glm-5.3-flash | 2 | 2/0 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Das_1990_reference](drugs/drug_sulfobromophthalein/Sulfobromophthalein_Das1990_reference.md) | — | 1-compartment (no model) | 0 | Das JB et al., Hepatic organic anion transport kinetic…, Proceedings of the Society… (1990) | [10.3181/00379727-195-43147](https://doi.org/10.3181/00379727-195-43147) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Glasinovic_1976_reference](drugs/drug_sulfobromophthalein/Sulfobromophthalein_Glasinovic1976_reference.md) | — | 1-compartment (no model) | 0 | Glasinovic JC et al., The hepatic handling of 131I-labeled su…, Biomedicine / [publiee pour… (1976) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfobromophthalein) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC10A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Glasinovic_1976.pdf` | Glasinovic JC et al., The hepatic handling of 131I-labeled su…, Biomedicine / [publiee pour… (1976) | popPK | 8 | not captured | [990386](https://pubmed.ncbi.nlm.nih.gov/990386) | Compartmental analysis of BSP disposition in dogs with some numeric values (extraction fractions) given, though transfer rate constants are only summarized as significant differences. |
| `Biagi_1979.pdf` | Biagi P et al., [Sulfobromophthalein kinetics in normal…, Quaderni Sclavo di diagnost… (1979) | popPK | 7 | not captured | [554996](https://pubmed.ncbi.nlm.nih.gov/554996) | Compartmental PK analysis of sulfobromophthalein in humans, but no numeric parameter values appear in the evidence. |
| `Rodriguez-Garay_2004.pdf` | Rodriguez-Garay EA et al., Reversible cholestasis induced by exper…, Pathophysiology : the offic… (2004) | popPK | 7 | [10.1016/j.pathophys.2003.09.002](https://doi.org/10.1016/j.pathophys.2003.09.002) | [15177510](https://pubmed.ncbi.nlm.nih.gov/15177510) | Compartmental PK analysis of sulfobromophthalein in rats is described, but no numeric parameter values appear in the evidence. |
| `Roma_1994.pdf` | Roma MG et al., Hepatic transport of organic anions in…, Journal of hepatology (1994) | popPK | 6 | [10.1016/s0168-8278(05)80347-2](https://doi.org/10.1016/s0168-8278(05)80347-2) | [8071536](https://pubmed.ncbi.nlm.nih.gov/8071536) | Compartmental analysis of sulfobromophthalein plasma decay in rats is reported, but only percent changes are given in the abstract; actual numeric PK parameter values likely reside in the full text/figures not provided. |
| `Sorrentino_1988.pdf` | Sorrentino D et al., Sex differences in sulfobromophthalein-…, Biochemical pharmacology (1988) | popPK | 6 | [10.1016/0006-2952(88)90309-7](https://doi.org/10.1016/0006-2952(88)90309-7) | [3401243](https://pubmed.ncbi.nlm.nih.gov/3401243) | Perfused rat liver PK of BSP-GSH (sulfobromophthalein metabolite) with clearance, Vmax/Km and two-compartment analysis, but most numeric values (e.g., exact CL, Km, Vmax) are only summarized as percentages in the abstract. |

<sub>queue written 2026-10-07T21:52:13.344634+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagi_1979 | relevant | 7 | 1 | Compartmental PK analysis of sulfobromophthalein in humans, but no numeric parameter values appear in the evidence. |
| popPK | Lau_1992 | irrelevant | 0 | 0 | SBP is only used as a GST inhibitor probe in an in vitro rabbit aorta study of glyceryl trinitrate; no PK parameters for SBP are reported. |
| popPK | Namihisa_1981 | irrelevant | 2 | 3 | BSP is only a diagnostic comparator to ICG; only plasma disappearance rates (0.058–0.126) are given, not clearance/volume or a BSP PK model. |
| popPK | Quarfordt_1971 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Rodriguez-Garay_2004 | relevant | 7 | 2 | Compartmental PK analysis of sulfobromophthalein in rats is described, but no numeric parameter values appear in the evidence. |
| popPK | Roma_1994 | relevant | 6 | 3 | Compartmental analysis of sulfobromophthalein plasma decay in rats is reported, but only percent changes are given in the abstract; actual numeric PK parameter values likely reside in the full text/figures not provided. |
| popPK | Sorrentino_1988 | relevant | 6 | 4 | Perfused rat liver PK of BSP-GSH (sulfobromophthalein metabolite) with clearance, Vmax/Km and two-compartment analysis, but most numeric values (e.g., exact CL, Km, Vmax) are only summarized as percentages in the abstract. |
| popPK | Ueno_2012 | irrelevant | 0 | 0 | This is an in-vitro Caco-2 uptake study of SN-38 (irinotecan metabolite); sulfobromophthalein is only a co-administered transporter probe with no PK parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:52 UTC</sub>
