<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levosulpiride&quot;}]"></div>

# levosulpiride

- **generic name:** levosulpiride
- **ATC codes:** `N05AL07`
- **DrugBank:** [DB16021](https://go.drugbank.com/drugs/DB16021) · **PubChem:** not captured
- **molar mass:** 341.43 g/mol (C15H23N3O4S) — DrugBank
- **groups:** investigational

## About

Levosulpiride, the left-handed form of sulpiride, has been used to treat schizophrenia, major depressive disorder, and indigestion. It is classified as investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1452256](https://www.wikidata.org/wiki/Q1452256) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:56 | 1:17 | 0/0/0 | 0/0/1 | 0/0/0 | 28,054/1,308 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Peris_1988_3H_ASP_release](drugs/drug_levosulpiride/pd_Peris_1988_3H_ASP_release.md) | K+-stimulated [3H]D-aspartate ([3H]ASP) release ← S-sulpiride (levosulpiride) · direct Emax (saturable) effect | — | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levosulpiride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ackerman_1984.pdf` | Ackerman DM et al., Pharmacological characterization of dop…, Archives internationales de… (1984) | pd | 4 | not captured | [6712357](https://www.ncbi.nlm.nih.gov/pubmed/6712357) | metadata signals extractable PD data (EC50) |
| `Bowery_1994.pdf` | Bowery B et al., Comparison between the pharmacology of…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13161.x](https://doi.org/10.1111/j.1476-5381.1994.tb13161.x) | [7921615](https://www.ncbi.nlm.nih.gov/pubmed/7921615) | metadata signals extractable PD data (EC50) |
| `Peris_1988.pdf` | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | pd | 4 | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) | [2973144](https://www.ncbi.nlm.nih.gov/pubmed/2973144) | metadata signals extractable PD data (EC50) |
| `Cho_2010.pdf` | Cho HY et al., Influence of ABCB1 genetic polymorphism…, Neuroscience (2010) | pgx | 8 | [10.1016/j.neuroscience.2010.04.065](https://doi.org/10.1016/j.neuroscience.2010.04.065) | [20438811](https://www.ncbi.nlm.nih.gov/pubmed/20438811) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-06T15:56:32.130412+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ackerman_1984 | irrelevant | 0 | 0 | This is a pharmacological characterization of dopamine-4-O-sulfate in dog/guinea-pig/rabbit tissues; levosulpiride is not the subject drug and no PK parameters are reported. |
| popPK | Bowery_1994 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| popPK | Cho_2004 | relevant | 4 | 3 | Non-compartmental bioequivalence study of levosulpiride in humans; t1/2 is reported but no CL or V values appear in the evidence, and no numeric t1/2 value is given. |
| popPK | Gallagher_1985 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study of a dopamine receptor agonist (SK&F 101468), not a PK study of levosulpiride; sulpiride appears only as an antagonist. |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | In-vitro mechanistic study of sulpiride as a D2 antagonist in opossum kidney cells, with no PK parameters for levosulpiride. |
| popPK | Hayashi_1999 | irrelevant | 0 | 0 | In-vitro pharmacology study of sulpiride's effects on NMDA-induced calcium signaling in rat neurons; no PK parameters reported. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | In-vitro rat striatal slice receptor pharmacology study of sulpiride as a D-2 ligand; no PK disposition parameters for levosulpiride. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | In vitro receptor pharmacology study in human atrial tissue; levosulpiride is not the subject drug and no PK parameters are reported. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | No pharmacogenomic effects on levosulpiride PK/PD parameters are reported; only CYP3A4 drug interactions with cisapride are mentioned. |
| popPK | Vieira-Coelho_2001 | irrelevant | 0 | 0 | In-vitro mechanistic study of dopamine effects on sodium transport; sulpiride is only a receptor antagonist, no PK parameters for levosulpiride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
