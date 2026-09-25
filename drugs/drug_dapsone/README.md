<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Gatti1996_reference&quot;,&quot;label&quot;:&quot;Gatti_1996_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Gatti1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Kotila2023_reference&quot;,&quot;label&quot;:&quot;Kotila_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Simpson2006v2_reference&quot;,&quot;label&quot;:&quot;Simpson_2006_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Simpson2006v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Falloon1994_reference&quot;,&quot;label&quot;:&quot;Falloon_1994_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Falloon1994_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dapsone

- **generic name:** dapsone
- **ATC codes:** `D10AX05`, `J04BA02`, `J04BA50`
- **DrugBank:** [DB00250](https://go.drugbank.com/drugs/DB00250)
- **groups:** approved, investigational

## About

**Description.** A sulfone active against a wide range of bacteria but mainly employed for its actions against mycobacterium leprae. Its mechanism of action is probably similar to that of the sulfonamides which involves inhibition of folic acid synthesis in susceptible organisms. It is also used with pyrimethamine in the treatment of malaria. (From Martindale, The Extra Pharmacopoeia, 30th ed, p157-8)

**Indication.** For the treatment and management of leprosy and dermatitis herpetiformis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 3/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 17 | 4/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `scholar`</sub> | [Gatti_1996_reference](drugs/drug_dapsone/Dapsone_Gatti1996_reference.md) | Gatti G et al., Population pharmacokinetics of dapsone…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.12.2743](https://doi.org/10.1128/AAC.40.12.2743) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kotila_2023_reference](drugs/drug_dapsone/Dapsone_Kotila2023_reference.md) | Kotila OA et al., Non-compartmental and population pharma…, British journal of clinical… (2023) | [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl[chlorcycloguanil], Vd[chlorcycloguanil], formation_rate l…</sub><br><sub>route_to: `scholar`</sub> | [Simpson_2006_2_reference](drugs/drug_dapsone/Dapsone_Simpson2006v2_reference.md) | Simpson JA et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02567.x](https://doi.org/10.1111/j.1365-2125.2005.02567.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Falloon_1994_reference](drugs/drug_dapsone/Dapsone_Falloon1994_reference.md) | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dapsone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` inducer/substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `FMO3` substrate, `NAT2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `NAT2` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Renal…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), MPO (substrate), PTGS1 (substrate), PTGS2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 17 returned
- **screened:** 4  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mirochnick_2001.pdf` | Mirochnick M et al., Population pharmacokinetics of dapsone…, Clinical pharmacology and t… (2001) | popPK | 10 | [10.1067/mcp.2001.115891](https://doi.org/10.1067/mcp.2001.115891) | [11452241](https://pubmed.ncbi.nlm.nih.gov/11452241) | The paper explicitly reports a population pharmacokinetic model for dapsone with quantitative estimates of clearance, volume of distribution, and absorption rate constant in children. |

<sub>queue written 2026-07-18T02:39:25.814440+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Reilly_1998 | irrelevant | not captured | not captured | The paper is an in vitro mechanistic study comparing metabolite cytotoxicity and contains no in vivo pharmacokinetic parameters for dapsone. |
| popPK | Tingle_1990 | irrelevant | not captured | not captured | The paper is an in vitro mechanistic study of dapsone-induced methaemoglobinaemia using a physical two-chamber setup and reports no quantitative pharmacokinetic or population-PK parameters. |
| popPK | Tingle_1991 | irrelevant | not captured | not captured | The study is an in vitro mechanistic investigation of cimetidine-mediated metabolic inhibition of dapsone using liver microsomes and reports no quantitative pharmacokinetic parameters. |
| popPK | Tingle_1993 | irrelevant | not captured | not captured | The study is an in vitro mechanistic toxicology investigation using a physical cell culture apparatus and reports no quantitative pharmacokinetic parameters for dapsone. |
| popPK | Vage_1994 | irrelevant | not captured | not captured | no extractable full text |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:22 UTC</sub>
