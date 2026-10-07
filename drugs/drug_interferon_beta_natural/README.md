<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon beta natural&quot;}]"></div>

# interferon beta natural

- **generic name:** interferon beta natural
- **ATC codes:** `L03AB02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Interferon beta (natural) is an immunostimulant drug used mainly to treat multiple sclerosis. It is an established disease-modifying therapy, given by injection, and remains in clinical use in many countries.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:08 | 3:09 | 0/0/0 | 0/0/0 | 0/0/0 | 55,266/1,872 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 232 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chiang_1993.pdf` | Chiang J et al., Pharmacokinetics and antiviral activity…, Journal of interferon resea… (1993) | popPK | 10 | [10.1089/jir.1993.13.111](https://doi.org/10.1089/jir.1993.13.111) | [8509658](https://pubmed.ncbi.nlm.nih.gov/8509658) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for recombinant human interferon-beta (an interferon_beta_natural analog) in African green monkeys. |
| `Hilfenhaus_1981.pdf` | Hilfenhaus J et al., Pharmacokinetics of human interferon-be…, Journal of interferon resea… (1981) | popPK | 8 | [10.1089/jir.1981.1.427](https://doi.org/10.1089/jir.1981.1.427) | [6180075](https://pubmed.ncbi.nlm.nih.gov/6180075) | The study reports quantitative serum and CSF concentrations (IU/mL) and qualitative clearance trends for interferon-beta in monkeys, though it lacks explicit compartmental PK parameter estimates like CL or V. |
| `Satoh_1984.pdf` | Satoh YI et al., Different pharmacokinetics between natu…, Journal of interferon resea… (1984) | popPK | 5 | [10.1089/jir.1984.4.411](https://doi.org/10.1089/jir.1984.4.411) | [6491398](https://pubmed.ncbi.nlm.nih.gov/6491398) | The study reports that pharmacokinetic parameters exist and differ, but no numeric values for clearance, volume, or rate constants are provided in the evidence. |

<sub>queue written 2026-10-06T23:08:45.470539+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | David_2012 | irrelevant | 0 | 0 | The paper is a clinical pharmacokinetics review for fingolimod, not interferon_beta_natural. |
| popPK | Dondelinger_2016 | irrelevant | 0 | 0 | The paper discusses the evolutionary conservation of the necroptotic pathway and interferon-beta signaling, not the pharmacokinetics of interferon_beta_natural. |
| popPK | Fogdell-Hahn_2015 | irrelevant | 0 | 0 | The paper is a review of antidrug antibodies and immunology, not a pharmacokinetic study, and contains no quantitative PK parameters for interferon beta. |
| popPK | Furue_1984 | irrelevant | 1 | 0 | The paper describes pharmacokinetics qualitatively without reporting any quantitative parameters (clearance, volume, half-life, ka) in the provided evidence. |
| popPK | Furue_1987 | irrelevant | 0 | 0 | The study investigates interferon-gamma, which is a different drug from the target interferon-beta. |
| popPK | Halme_1994 | irrelevant | 0 | 0 | The study reports that interferon-beta was not detectable in serum, so no quantitative pharmacokinetic parameters were generated. |
| popPK | Karupiah_1993 | irrelevant | 0 | 0 | The study focuses on the immunological role of interferons in viral recovery in mice and contains no pharmacokinetic parameters. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The paper focuses on the anti-septic properties of Lonicera japonica extract in mice and does not report pharmacokinetic parameters for interferon_beta_natural. |
| popPK | Krishnamoorthy_2023 | irrelevant | 0 | 0 | The paper investigates Maresin 1's effects on RSV-induced inflammation in mice and mentions interferon-beta expression as a downstream biomarker, but contains no pharmacokinetic modeling or quantitative disposition parameters for interferon_beta_natural. |
| popPK | Mandatori_2023 | irrelevant | 0 | 0 | The paper investigates the immunological mechanism of IFN-β in T-cell differentiation and does not contain any pharmacokinetic data or disposition parameters for the drug. |
| popPK | Meyer_2009 | irrelevant | 0 | 0 | This is a general review of interferons in autoimmune disorders and contains no quantitative pharmacokinetic parameters (e.g., CL, V, ka) for interferon_beta_natural. |
| popPK | Nokta_1991 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters (half-life, metabolic rate, volume of distribution) for zidovudine (AZT), not for interferon_beta_natural, which serves only as the co-administered drug affecting AZT metabolism. |
| popPK | Ramamurthy_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of IFN-beta activity reduction by fibroblasts, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Satoh_1984 | irrelevant | 5 | 0 | The study reports that pharmacokinetic parameters exist and differ, but no numeric values for clearance, volume, or rate constants are provided in the evidence. |
| popPK | Schectman_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of interferon beta on LDL metabolism, not the pharmacokinetics of interferon beta itself. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The study investigates the efficacy of AHCC supplementation for clearing HPV infections and measures IFN-β as an immune marker, not as a dosed drug for pharmacokinetic analysis. |
| popPK | Stoszko_2016 | irrelevant | 0 | 0 | The study focuses on HIV-1 latency reversal mechanisms using BAF inhibitors and does not report pharmacokinetic parameters for interferon_beta_natural. |
| popPK | Takahashi_2020 | irrelevant | 1 | 0 | This is a pharmacogenomic review that discusses IFN-β1b's safety and immunogenicity (neutralizing antibodies, liver injury genetics) but provides no quantitative pharmacokinetic disposition parameters (CL, V, t1/2, or compartmental models). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
