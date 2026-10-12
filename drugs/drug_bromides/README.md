<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;bromides&quot;}]"></div>

# bromides

- **generic name:** bromides
- **ATC codes:** `N05CM11`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Bromides were once used as sedatives and hypnotics to calm patients and treat nervous disorders. They are no longer used in human medicine because long-term use caused bromism, a toxic build-up leading to neurological and skin problems.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422423](https://www.wikidata.org/wiki/Q422423) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:43 | 0:33 | 0/0/0 | 0/1/0 | 0/0/0 | 60,962/1,920 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_EC50_Vibrio_fischeri](drugs/drug_bromides/pd_Fojt_kov_2020_EC50_Vibrio_fischeri.md) | Luminescence inhibition of Vibrio fischeri (acute toxicity) ← bromide ionic liquids ([C4MIM][Br], [N2224][Br], [N2228][Br], [N222,12][Br]) · inhibition effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_Inhibition](drugs/drug_bromides/pd_Fojt_kov_2020_Inhibition.md) | Inhibition of Bacillus subtilis growth ← [N222,12][Br] (dodecyltriethylammonium bromide) · direct sigmoid Emax (Hill) effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biczak_2020 | irrelevant | 0 | 0 | This is a plant phytotoxicity/ecotoxicology study of ionic liquid bromides in cucumber seedlings, with no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for bromides. |
| popPK | Fojtášková_2020 | irrelevant | 0 | 0 | This is a chemistry/ecotoxicity study of ionic liquid synthesis; "bromides" are only counterions/precursors, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Hou_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on antifungal β-carboline salts; "bromides" refers only to counterions, with no pharmacokinetic parameters reported. |
| popPK | Nordeman_2012 | irrelevant | 0 | 0 | This is a synthetic chemistry paper about aryl bromides as substrates, not pharmacokinetics of the drug bromide. |
| popPK | Novikov_2010 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" appear only as synthetic reagents, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Rastegari_2009 | irrelevant | 0 | 0 | This is an in-vitro surfactant–enzyme binding study; alkyl trimethyl ammonium bromides are surfactants, not the drug bromide, and no PK parameters exist. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | This is a synthetic chemistry/antifungal SAR study; "bromides" refers to chemical salt forms, not the drug bromide, and no PK parameters are reported. |
| popPK | el-Sabbagh_2009 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" refers only to reagents (phenacyl bromides), with no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
