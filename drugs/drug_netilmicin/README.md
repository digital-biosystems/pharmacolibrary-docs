<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;netilmicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Netilmicin_Winslade1987v2_reference&quot;,&quot;label&quot;:&quot;Winslade_1987_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/Netilmicin_Winslade1987v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Netilmicin_Jauregizar2003_reference&quot;,&quot;label&quot;:&quot;Jauregizar_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/Netilmicin_Jauregizar2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Netilmicin_Siegel1979_reference&quot;,&quot;label&quot;:&quot;Siegel_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/Netilmicin_Siegel1979_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# netilmicin

- **generic name:** netilmicin
- **ATC codes:** `J01GB07`, `S01AA23`
- **DrugBank:** [DB00955](https://go.drugbank.com/drugs/DB00955)
- **groups:** approved

## About

**Description.** Netilmicin is a semisynthetic 1-N-ethyl derivative of sisomycin, an aminoglycoside antibiotic with action similar to gentamicin, but less ear and kidney toxicity. Netilmicin inhibits protein synthesis in susceptible organisms by binding to the bacterial 30S ribosomal subunit and interfering with mRNA binding and the acceptor tRNA site. The bactericidal effect of netilmiicin is not fully understood.

**Indication.** For the treatment of bacteremia, septicaemia, respiratory tract infections, skin and soft-tissue infection, burns, wounds, and peri-operative infections caused by susceptible strains.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 21 | 4/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Winslade_1987_2_reference](drugs/drug_netilmicin/Netilmicin_Winslade1987v2_reference.md) | Winslade NE et al., Single-dose accumulation pharmacokineti…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.4.605](https://doi.org/10.1128/AAC.31.4.605) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Jauregizar_2003_reference](drugs/drug_netilmicin/Netilmicin_Jauregizar2003_reference.md) | Jauregizar N et al., Population pharmacokinetics of netilmic…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01783.x](https://doi.org/10.1046/j.1365-2125.2003.01783.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Siegel_1979_reference](drugs/drug_netilmicin/Netilmicin_Siegel1979_reference.md) | Siegel JD et al., Pharmacokinetic properties of netilmici…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.15.2.246](https://doi.org/10.1128/AAC.15.2.246) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=netilmicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>“…orbed orally. Topical absorption is also poor unless severe skin damage is present.…”</sub> | prose |
| metabolism | kidney | <sub>“…tabolic transformation, typically 80% is recoverable in the urine within 24 hours…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 14:02 UTC</sub>
